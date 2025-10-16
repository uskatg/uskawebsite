# 🖼️ Image Optimization Guide

## Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Images
Place your images in the `images/` folder. The script will optimize:
- `.jpg`, `.jpeg`, `.JPG`, `.JPEG`
- `.png`, `.PNG`

### Step 3: Run Optimization
```bash
npm run optimize
```

Your optimized images will be saved to `images/optimized/`

---

## What This Does

✅ **Reduces file size by 60-80%** (800KB → 150-250KB typically)
✅ **Maintains visual quality** (85% quality setting)
✅ **Resizes large images** (max 1920x1080px)
✅ **Progressive JPEGs** (loads faster on web)
✅ **Preserves aspect ratio**

---

## Configuration

Edit `optimize-images.js` to customize:

```javascript
const CONFIG = {
    inputDir: './images',           // Source folder
    outputDir: './images/optimized', // Output folder
    quality: 85,                     // JPEG quality (80-85 recommended)
    maxWidth: 1920,                  // Maximum width
    maxHeight: 1080,                 // Maximum height
};
```

---

## Manual Optimization (Online Tools)

If you prefer not to use the script, use these tools:

### Best Free Tools:
1. **TinyJPG/TinyPNG** - https://tinyjpeg.com
   - Drag & drop up to 20 images
   - Average 60-70% size reduction
   - Preserves quality

2. **Squoosh** - https://squoosh.app
   - Google's image optimizer
   - Real-time preview
   - Advanced settings

3. **Compressor.io** - https://compressor.io
   - Supports JPEG, PNG, SVG, GIF
   - Lossy & lossless compression

---

## Image Size Guidelines

### Convention/Gallery Photos:
- **Dimensions**: 1920x1080px (16:9) or 1600x1200px (4:3)
- **File Size**: 150-250 KB per image
- **Quality**: 80-85%
- **Format**: JPEG

### Hero/Banner Images:
- **Dimensions**: 1920x1080px or 2560x1440px
- **File Size**: 200-300 KB
- **Quality**: 85%
- **Format**: JPEG

### Thumbnails:
- **Dimensions**: 600x400px
- **File Size**: 30-60 KB
- **Quality**: 80%
- **Format**: JPEG

---

## Usage Workflow

### For New Images:
1. Add original images to `images/` folder
2. Run `npm run optimize`
3. Copy optimized images from `images/optimized/` to `images/`
4. Delete originals (optional, keep as backup)

### Batch Processing:
```bash
# Optimize all images
npm run optimize

# The script shows:
# - Original size
# - New size
# - Percentage saved
# - Total savings
```

---

## Example Output

```
🖼️  Image Optimization Tool

Found 10 images to optimize

[1/10] Processing: convention1.jpg
  ✓ 823 KB → 187 KB (-77.3%)
  ↔ Resized to max 1920x1080px

[2/10] Processing: convention2.jpg
  ✓ 915 KB → 201 KB (-78.0%)

...

═══════════════════════════════════════
✓ Successfully optimized: 10

Total size reduction:
  Before: 8.2 MB
  After:  1.9 MB
  Saved:  6.3 MB (-76.8%)

Optimized images saved to: images/optimized
```

---

## Tips for Best Results

### Photography Tips:
1. **Export at correct size** - Don't export at 4K if displaying at 1080p
2. **Use JPEG for photos** - PNG is for graphics/logos with transparency
3. **Crop unnecessary areas** - Remove dead space before optimizing
4. **Good lighting** - Well-lit photos compress better

### Web Performance:
1. **Lazy loading** - Already implemented in your site
2. **Progressive JPEGs** - Loads top-to-bottom (automated by script)
3. **Responsive images** - Serve different sizes for mobile/desktop
4. **CDN** - Vercel automatically serves from global CDN

### File Naming:
- Use descriptive names: `convention-2025-booth.jpg`
- No spaces: Use hyphens or underscores
- Lowercase: Better for URLs
- Sequential: `img1.jpg`, `img2.jpg` for easy sorting

---

## Troubleshooting

### "sharp is not installed"
```bash
npm install sharp
```

### "Permission denied"
```bash
chmod +x optimize-images.js
```

### Images look blurry
- Increase quality in CONFIG (try 90)
- Check original image quality
- Ensure source is high resolution

### File size still too large
- Reduce maxWidth/maxHeight
- Lower quality setting (try 80)
- Use online tools for additional compression
- Consider WebP format for better compression

---

## Advanced: WebP Format

For even better compression (25-35% smaller than JPEG):

1. Convert to WebP using online tools
2. Use with `<picture>` tag for fallback:

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

---

## Questions?

- Check if image looks good after optimization
- Aim for 150-250 KB per image for best performance
- Quality 85 is the sweet spot for most photos
- Always keep original backups until you're satisfied

Happy optimizing! 🚀

