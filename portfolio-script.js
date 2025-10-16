// ==================== HAMBURGER MENU ==================== 
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const closeMenuBtn = document.querySelector('.close-menu');
const menuLinks = document.querySelectorAll('.menu-link');

// Open menu
hamburgerBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close menu
closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu when clicking on a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ==================== IMAGE ZOOM MODAL ====================
const artworkCards = document.querySelectorAll('.artwork-card');
const zoomModal = document.querySelector('.zoom-modal');
const closeZoomBtn = document.querySelector('.close-zoom');
const zoomedImage = document.querySelector('.zoomed-image');
const zoomArtist = document.querySelector('.zoom-artist');
const zoomTitle = document.querySelector('.zoom-title');

// Open zoom modal
artworkCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('.artwork-image');
        const artist = card.querySelector('.artist-label');
        const title = card.querySelector('.artwork-title');

        zoomedImage.src = img.src;
        zoomedImage.alt = img.alt;
        zoomArtist.textContent = artist.textContent;
        zoomTitle.textContent = title.textContent;

        zoomModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close zoom modal
closeZoomBtn.addEventListener('click', () => {
    zoomModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close zoom when clicking outside the image
zoomModal.addEventListener('click', (e) => {
    if (e.target === zoomModal) {
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close zoom with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ==================== CAROUSEL FUNCTIONALITY ====================
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselWrapper = document.querySelector('.carousel-slides-wrapper');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Function to show specific slide
function showSlide(index) {
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
    
    // Slide to the correct position
    const offset = -index * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
    currentSlide = index;
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-advance carousel - enabled
let autoAdvanceInterval;

function startAutoAdvance() {
    autoAdvanceInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoAdvance() {
    clearInterval(autoAdvanceInterval);
}

// Start auto-advance
startAutoAdvance();

// Pause on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', stopAutoAdvance);
carouselContainer.addEventListener('mouseleave', startAutoAdvance);

// ==================== TOUCH SWIPE FOR MOBILE ====================
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let isDragging = false;
let currentTranslate = 0;
let prevTranslate = 0;

carouselContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isDragging = true;
    
    // Disable transition during drag
    carouselWrapper.style.transition = 'none';
}, { passive: true });

carouselContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartX;
    const diffY = Math.abs(currentY - touchStartY);
    
    // Only handle horizontal swipes
    if (Math.abs(diffX) > diffY) {
        e.preventDefault();
        
        // Calculate the current translate position
        const containerWidth = carouselContainer.offsetWidth;
        const dragPercent = (diffX / containerWidth) * 100;
        currentTranslate = prevTranslate + dragPercent;
        
        // Apply the drag with some resistance at edges
        carouselWrapper.style.transform = `translateX(${currentTranslate}%)`;
    }
}, { passive: false });

carouselContainer.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    
    // Re-enable transition
    carouselWrapper.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    const swipeThreshold = 50; // Minimum distance for a swipe
    const horizontalDistance = touchEndX - touchStartX;
    const verticalDistance = Math.abs(touchEndY - touchStartY);
    
    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(horizontalDistance) > swipeThreshold && Math.abs(horizontalDistance) > verticalDistance) {
        if (horizontalDistance > 0) {
            // Swipe right - go to previous slide
            currentSlide = currentSlide <= 0 ? carouselSlides.length - 1 : currentSlide - 1;
        } else {
            // Swipe left - go to next slide
            currentSlide = (currentSlide + 1) % carouselSlides.length;
        }
        
        showSlide(currentSlide);
        prevTranslate = -currentSlide * 100;
        
        // Reset auto-advance after manual swipe
        stopAutoAdvance();
        startAutoAdvance();
    } else {
        // Snap back to current slide if swipe was too short
        showSlide(currentSlide);
    }
}, { passive: true });

// ==================== FILTER FUNCTIONALITY ====================
const filterToggle = document.querySelector('.filter-toggle');
const filterOptions = document.querySelector('.filter-options');
const filterBtns = document.querySelectorAll('.filter-btn');

// Toggle filter panel
filterToggle.addEventListener('click', () => {
    filterToggle.classList.toggle('active');
    filterOptions.classList.toggle('active');
    console.log('Filter panel toggled');
});

// Filter artwork by category
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const filterValue = btn.getAttribute('data-filter');
        console.log('Filter clicked:', filterValue);
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Get fresh list of artwork cards
        const artworkCards = document.querySelectorAll('.artwork-card');
        console.log('Total cards:', artworkCards.length);
        
        // Filter cards
        let visibleCount = 0;
        artworkCards.forEach(card => {
            const category = card.getAttribute('data-category');
            console.log('Card category:', category, 'Filter:', filterValue);
            
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                visibleCount++;
                // Re-trigger animation
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = '';
                }, 10);
            } else if (category === filterValue) {
                card.classList.remove('hidden');
                visibleCount++;
                // Re-trigger animation
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = '';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
        
        console.log('Visible cards:', visibleCount);
        
        // Announce filter change for accessibility
        announceToScreenReader(`Showing ${filterValue === 'all' ? 'all artwork' : filterValue.replace('-', ' ')}`);
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==================== LAZY LOADING IMAGES ====================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

// Observe all images (for future expansion with data-src attributes)
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ==================== HEADER SCROLL EFFECT ====================
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    // Optional: Hide header on scroll down, show on scroll up
    /*
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    */

    lastScroll = currentScroll;
});

// ==================== KEYBOARD NAVIGATION ====================
// Navigate through gallery with arrow keys
let currentCardIndex = -1;
const cards = Array.from(artworkCards);

document.addEventListener('keydown', (e) => {
    // Only navigate if zoom modal is not active
    if (!zoomModal.classList.contains('active') && !menuOverlay.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            cards[currentCardIndex].focus();
            cards[currentCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (e.key === 'ArrowLeft') {
            currentCardIndex = currentCardIndex <= 0 ? cards.length - 1 : currentCardIndex - 1;
            cards[currentCardIndex].focus();
            cards[currentCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (e.key === 'Enter' && currentCardIndex >= 0) {
            cards[currentCardIndex].click();
        }
    }
});

// Make cards keyboard accessible
artworkCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${card.querySelector('.artwork-title').textContent}`);
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// ==================== PERFORMANCE: REDUCE MOTION ====================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable smooth scrolling for users who prefer reduced motion
    document.documentElement.style.scrollBehavior = 'auto';
}

// ==================== CONSOLE WELCOME MESSAGE ====================
console.log('%c🎨 Portfolio Gallery', 'font-size: 20px; font-weight: bold; color: #2d5bff;');
console.log('%cDesign System: Art Portfolio Gallery v1.0.0', 'font-size: 14px; color: #666;');
console.log('%cBuilt with HTML, CSS, and vanilla JavaScript', 'font-size: 12px; color: #999;');

// ==================== ACCESSIBILITY ANNOUNCEMENTS ====================
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Announce when modals open/close
const originalMenuAdd = menuOverlay.classList.add;
menuOverlay.classList.add = function(...args) {
    originalMenuAdd.apply(this, args);
    if (args.includes('active')) {
        announceToScreenReader('Navigation menu opened');
    }
};

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('✅ Portfolio loaded successfully');
});

