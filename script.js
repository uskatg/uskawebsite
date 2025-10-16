/**
 * Linktree Clone - Main JavaScript
 * Handles dynamic content loading, interactivity, and animations
 */

// ============================================
// PROFILE DATA
// ============================================

const profileData = {
    username: "USKA.TG",
    email: "uskacool@gmail.com",
    avatar: "images/profilepicture.jpg",
    backgroundImage: "images/backgroundv2.jpg",
    theme: "light",
    socialLinks: [
        {
            platform: "email",
            url: "mailto:uskacool@gmail.com",
            displayInHeader: true
        },
        {
            platform: "instagram",
            url: "https://instagram.com/uska.tg",
            displayInHeader: true
        },
        {
            platform: "portfolio",
            url: "https://uska.app/portfolio",
            displayInHeader: true
        },
        {
            platform: "youtube",
            url: "https://www.youtube.com/@uska_tg",
            displayInHeader: true
        },
        {
            platform: "tiktok",
            url: "https://tiktok.com/@uska.tg",
            displayInHeader: true
        }
    ],
    links: [
        {
            id: "instagram-card",
            type: "image-showcase",
            title: "Instagram",
            subtitle: "",
            url: "https://instagram.com/uska.tg",
            thumbnail: "images/banner.JPG",
            priority: 1,
            enabled: true
        },
        {
            id: "discord-server",
            type: "image-showcase",
            title: "Discord | 病監院收容所",
            subtitle: "Discord Server • Free to join",
            url: "https://discord.gg/invite",
            thumbnail: "https://via.placeholder.com/1200x630/764ba2/ffffff?text=Discord+Server",
            priority: 2,
            enabled: false
        },
        {
            id: "patreon-page",
            type: "image-showcase",
            title: "Patreon | Pay床 創作幕後花絮",
            subtitle: "",
            url: "https://patreon.com/manfung",
            imageGallery: [
                "https://via.placeholder.com/800x800/667eea/ffffff?text=Patreon+1",
                "https://via.placeholder.com/800x800/764ba2/ffffff?text=Patreon+2"
            ],
            priority: 3,
            enabled: false
        },
        {
            id: "portfolio",
            type: "image-showcase",
            title: "Portfolio",
            subtitle: "",
            url: "https://uska.app/portfolio",
            imageGallery: [
                "images/portfolio1.jpg",
                "images/portfolio2.jpg",
                "images/portfolio3.jpg",
                "images/portfolio4.jpg",
                "images/portfolio5.jpg",
                "images/portfolio6.jpg"
            ],
            priority: 2,
            enabled: true
        },
        {
            id: "youtube",
            type: "simple-link",
            title: "YouTube",
            url: "https://www.youtube.com/@uska_tg",
            icon: "youtube",
            priority: 3,
            enabled: true
        },
        {
            id: "tiktok",
            type: "simple-link",
            title: "TikTok",
            url: "https://tiktok.com/@uska.tg",
            icon: "tiktok",
            priority: 4,
            enabled: true
        }
    ]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Show toast notification
 */
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

/**
 * Copy text to clipboard
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy');
    }
}

/**
 * Track link click (for analytics)
 */
function trackLinkClick(linkId, url) {
    console.log(`Link clicked: ${linkId} - ${url}`);
    // Add your analytics tracking here (Google Analytics, Plausible, etc.)
}

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Create Image Showcase Card
 */
function createImageShowcaseCard(link) {
    const card = document.createElement('a');
    card.href = link.url;
    card.className = 'link-card image-showcase-card';
    card.setAttribute('role', 'listitem');
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    // Track click
    card.addEventListener('click', (e) => {
        trackLinkClick(link.id, link.url);
    });
    
    let imageHTML = '';
    
    // Single image or gallery
    if (link.imageGallery && link.imageGallery.length > 0) {
        // Image grid
        imageHTML = `
            <div class="card-image-container card-image-grid">
                ${link.imageGallery.map((img, index) => `
                    <img src="${img}" 
                         alt="${link.title} - Image ${index + 1}" 
                         class="card-image"
                         loading="lazy">
                `).join('')}
            </div>
        `;
    } else if (link.thumbnail) {
        // Single image
        imageHTML = `
            <div class="card-image-container">
                <img src="${link.thumbnail}" 
                     alt="${link.title}" 
                     class="card-image"
                     loading="lazy">
            </div>
        `;
    }
    
    const subtitle = link.subtitle ? `<p class="card-subtitle">${link.subtitle}</p>` : '';
    
    card.innerHTML = `
        ${imageHTML}
        <h2 class="card-title">${link.title}</h2>
        ${subtitle}
        <button class="more-btn" aria-label="More options" onclick="handleMoreClick(event, '${link.id}')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
            </svg>
        </button>
    `;
    
    return card;
}

/**
 * Create Simple Link Card
 */
function createSimpleLinkCard(link) {
    const card = document.createElement('a');
    card.href = link.url;
    card.className = 'link-card simple-link-card';
    card.setAttribute('role', 'listitem');
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    // Track click
    card.addEventListener('click', (e) => {
        trackLinkClick(link.id, link.url);
    });
    
    // Get icon SVG
    const iconSVG = getIconSVG(link.icon);
    
    card.innerHTML = `
        <div class="card-icon">
            ${iconSVG}
        </div>
        <span class="card-text">${link.title}</span>
        <button class="more-btn" aria-label="More options" onclick="handleMoreClick(event, '${link.id}')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
            </svg>
        </button>
    `;
    
    return card;
}

/**
 * Get icon SVG by name
 */
function getIconSVG(iconName) {
    const icons = {
        'x-twitter': `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        `,
        'facebook': `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        `,
        'instagram': `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
        `,
        'youtube': `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        `,
        'tiktok': `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
        `
    };
    
    return icons[iconName] || icons['x-twitter'];
}

/**
 * Render all links
 */
function renderLinks() {
    const linksSection = document.getElementById('linksSection');
    linksSection.innerHTML = ''; // Clear existing links
    
    // Sort links by priority
    const sortedLinks = profileData.links
        .filter(link => link.enabled)
        .sort((a, b) => a.priority - b.priority);
    
    // Render each link
    sortedLinks.forEach(link => {
        let card;
        
        if (link.type === 'image-showcase') {
            card = createImageShowcaseCard(link);
        } else if (link.type === 'simple-link') {
            card = createSimpleLinkCard(link);
        }
        
        if (card) {
            linksSection.appendChild(card);
        }
    });
}

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Handle more button click
 */
function handleMoreClick(event, linkId) {
    event.preventDefault();
    event.stopPropagation();
    
    const link = profileData.links.find(l => l.id === linkId);
    if (link) {
        showToast(`More options for: ${link.title}`);
        // Add your custom menu/modal logic here
    }
}

/**
 * Handle share button click
 */
function handleShare() {
    const shareData = {
        title: profileData.username,
        text: `Check out ${profileData.username}'s links`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('Thanks for sharing!'))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    copyToClipboard(window.location.href);
                }
            });
    } else {
        copyToClipboard(window.location.href);
    }
}

/**
 * Handle email click
 */
function handleEmailClick(event) {
    // Allow default behavior for email links
    showToast('Opening email client...');
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function init() {
    console.log('🚀 Initializing Linktree clone...');
    
    // Set profile data
    document.getElementById('profileName').textContent = profileData.username;
    document.getElementById('emailDisplay').textContent = profileData.email;
    document.getElementById('emailDisplay').href = `mailto:${profileData.email}`;
    
    // Set avatar
    if (profileData.avatar) {
        document.getElementById('avatarImg').src = profileData.avatar;
    }
    
    // Set background if provided
    if (profileData.backgroundImage) {
        const bg = document.getElementById('pageBackground');
        bg.style.backgroundImage = `url(${profileData.backgroundImage})`;
    }
    
    // Render links
    renderLinks();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('✅ Initialization complete');
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', handleShare);
    }
    
    // Menu button
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            showToast('Menu clicked');
            // Add your menu logic here
        });
    }
    
    // Notification button
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            showToast('No new notifications');
            // Add your notification logic here
        });
    }
    
    // Email click
    const emailDisplay = document.getElementById('emailDisplay');
    if (emailDisplay) {
        emailDisplay.addEventListener('click', handleEmailClick);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // ESC to close modals/menus
        if (e.key === 'Escape') {
            // Add your close logic here
        }
    });
    
    // Handle image loading errors
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            console.warn('Image failed to load:', e.target.src);
            // You could set a fallback image here
            // e.target.src = 'fallback-image.jpg';
        }
    }, true);
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

/**
 * Log performance metrics
 */
function logPerformance() {
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`📊 Page load time: ${pageLoadTime}ms`);
            }, 0);
        });
    }
}

// ============================================
// START APPLICATION
// ============================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Log performance
logPerformance();

// Make handleMoreClick available globally
window.handleMoreClick = handleMoreClick;

// ============================================
// SERVICE WORKER (Optional - for PWA)
// ============================================

// Uncomment to enable PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}
*/

