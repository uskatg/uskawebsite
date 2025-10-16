#!/usr/bin/env node

/**
 * Image Optimization Script
 * Automatically optimizes JPEG/PNG images to reduce file size while maintaining quality
 * 
 * Usage:
 *   node optimize-images.js
 * 
 * Or make it executable:
 *   chmod +x optimize-images.js
 *   ./optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
    inputDir: './images',
    outputDir: './images/optimized',
    quality: 85, // JPEG quality (80-85 is recommended)
    maxWidth: 1920, // Maximum width in pixels
    maxHeight: 1080, // Maximum height in pixels
    formats: ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'],
};

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    red: '\x1b[31m',
};

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(inputPath, outputPath) {
    try {
        const stats = await fs.stat(inputPath);
        const originalSize = stats.size;

        // Get image metadata
        const metadata = await sharp(inputPath).metadata();
        
        // Determine if resize is needed
        const needsResize = metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight;

        let sharpInstance = sharp(inputPath);

        // Resize if needed (maintains aspect ratio)
        if (needsResize) {
            sharpInstance = sharpInstance.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
                fit: 'inside',
                withoutEnlargement: true,
            });
        }

        // Optimize based on format
        if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            sharpInstance = sharpInstance.jpeg({
                quality: CONFIG.quality,
                progressive: true,
                mozjpeg: true,
            });
        } else if (metadata.format === 'png') {
            sharpInstance = sharpInstance.png({
                quality: CONFIG.quality,
                compressionLevel: 9,
                progressive: true,
            });
        }

        // Save optimized image
        await sharpInstance.toFile(outputPath);

        const newStats = await fs.stat(outputPath);
        const newSize = newStats.size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

        return {
            success: true,
            originalSize,
            newSize,
            savings,
            resized: needsResize,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

async function main() {
    console.log(`${colors.blue}🖼️  Image Optimization Tool${colors.reset}\n`);

    try {
        // Check if sharp is installed
        try {
            require('sharp');
        } catch (e) {
            console.log(`${colors.red}❌ Error: 'sharp' package is not installed${colors.reset}`);
            console.log(`${colors.yellow}Please run: npm install sharp${colors.reset}\n`);
            process.exit(1);
        }

        // Create output directory if it doesn't exist
        try {
            await fs.access(CONFIG.outputDir);
        } catch {
            await fs.mkdir(CONFIG.outputDir, { recursive: true });
            console.log(`${colors.green}✓${colors.reset} Created output directory: ${CONFIG.outputDir}\n`);
        }

        // Get all image files
        const files = await fs.readdir(CONFIG.inputDir);
        const imageFiles = files.filter(file => 
            CONFIG.formats.some(ext => file.endsWith(ext))
        );

        if (imageFiles.length === 0) {
            console.log(`${colors.yellow}No images found in ${CONFIG.inputDir}${colors.reset}`);
            return;
        }

        console.log(`Found ${colors.blue}${imageFiles.length}${colors.reset} images to optimize\n`);

        let totalOriginalSize = 0;
        let totalNewSize = 0;
        let successCount = 0;
        let failCount = 0;

        // Process each image
        for (let i = 0; i < imageFiles.length; i++) {
            const file = imageFiles[i];
            const inputPath = path.join(CONFIG.inputDir, file);
            const outputPath = path.join(CONFIG.outputDir, file);

            console.log(`[${i + 1}/${imageFiles.length}] Processing: ${colors.blue}${file}${colors.reset}`);

            const result = await optimizeImage(inputPath, outputPath);

            if (result.success) {
                totalOriginalSize += result.originalSize;
                totalNewSize += result.newSize;
                successCount++;

                const savingsColor = result.savings > 50 ? colors.green : 
                                    result.savings > 30 ? colors.yellow : colors.reset;

                console.log(`  ${colors.green}✓${colors.reset} ${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)} (${savingsColor}-${result.savings}%${colors.reset})`);
                if (result.resized) {
                    console.log(`  ${colors.yellow}↔${colors.reset} Resized to max ${CONFIG.maxWidth}x${CONFIG.maxHeight}px`);
                }
            } else {
                failCount++;
                console.log(`  ${colors.red}✗${colors.reset} Error: ${result.error}`);
            }
            console.log('');
        }

        // Summary
        console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}`);
        console.log(`${colors.green}✓ Successfully optimized: ${successCount}${colors.reset}`);
        if (failCount > 0) {
            console.log(`${colors.red}✗ Failed: ${failCount}${colors.reset}`);
        }
        console.log(`\n${colors.blue}Total size reduction:${colors.reset}`);
        console.log(`  Before: ${formatBytes(totalOriginalSize)}`);
        console.log(`  After:  ${formatBytes(totalNewSize)}`);
        const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
        console.log(`  Saved:  ${colors.green}${formatBytes(totalOriginalSize - totalNewSize)} (-${totalSavings}%)${colors.reset}`);
        console.log(`\n${colors.yellow}Optimized images saved to: ${CONFIG.outputDir}${colors.reset}`);

    } catch (error) {
        console.error(`${colors.red}Error:${colors.reset}`, error.message);
        process.exit(1);
    }
}

// Run the script
main();

