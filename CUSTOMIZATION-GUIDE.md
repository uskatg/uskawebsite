# Customization Guide - Make It Your Own! 🎨

This guide will help you customize every aspect of your Linktree-style profile page.

## 📝 Table of Contents

1. [Basic Profile Information](#basic-profile-information)
2. [Colors & Themes](#colors--themes)
3. [Fonts & Typography](#fonts--typography)
4. [Images & Media](#images--media)
5. [Links & Cards](#links--cards)
6. [Advanced Customization](#advanced-customization)

---

## Basic Profile Information

### Change Your Name

In `script.js`, find and edit:
```javascript
const profileData = {
    username: "YOUR NAME HERE",  // Change this
    // ...
};
```

Or in HTML directly (line 102):
```html
<h1 class="profile-name" id="profileName">YOUR NAME</h1>
```

### Change Your Email

In `script.js`:
```javascript
const profileData = {
    email: "your@email.com",  // Change this
    // ...
};
```

### Change Avatar Image

**Option 1: Use an external URL**
```javascript
avatar: "https://yourwebsite.com/images/avatar.jpg"
```

**Option 2: Use a local file**
1. Create an `images` folder in your project
2. Add your avatar image (e.g., `avatar.jpg`)
3. Update the path:
```javascript
avatar: "images/avatar.jpg"
```

**Recommended Avatar Specs:**
- Size: 400x400px minimum
- Format: JPG or PNG
- File size: < 500KB
- Shape: Square (will be displayed as circle)

---

## Colors & Themes

### Change Accent Color

Edit `styles.css` (around line 17):
```css
:root {
    --color-accent: #0066ff;  /* Change to your brand color */
}
```

**Popular color schemes:**
```css
/* Blue */
--color-accent: #0066ff;

/* Purple */
--color-accent: #9333ea;

/* Pink */
--color-accent: #ec4899;

/* Green */
--color-accent: #10b981;

/* Orange */
--color-accent: #f97316;
```

### Change Card Background

Edit `styles.css`:
```css
:root {
    --color-card-bg: rgba(255, 255, 255, 0.95);  /* White with 95% opacity */
}
```

**Try these:**
```css
/* More transparent */
--color-card-bg: rgba(255, 255, 255, 0.85);

/* Tinted cards */
--color-card-bg: rgba(102, 126, 234, 0.2);  /* Subtle purple tint */

/* Darker cards */
--color-card-bg: rgba(240, 240, 240, 0.95);
```

### Change Background Gradient

Edit `styles.css` (around line 75):
```css
.page-background {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Beautiful gradient options:**
```css
/* Sunset */
background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);

/* Ocean */
background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%);

/* Forest */
background: linear-gradient(135deg, #134E5E 0%, #71B280 100%);

/* Candy */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Night */
background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
```

### Use a Background Image

Edit `script.js`:
```javascript
const profileData = {
    backgroundImage: "images/background.jpg",
    // ...
};
```

Then in `script.js` `init()` function (around line 260):
```javascript
if (profileData.backgroundImage) {
    const bg = document.getElementById('pageBackground');
    bg.style.backgroundImage = `url(${profileData.backgroundImage})`;
}
```

**Background image specs:**
- Size: 1920x1080px
- Format: JPG (smaller file size)
- File size: < 1MB
- Note: Will be blurred automatically

---

## Fonts & Typography

### Change to Different Google Font

1. Go to [Google Fonts](https://fonts.google.com)
2. Choose a font (handwritten fonts work best)
3. Select weights: 400, 600, 700
4. Copy the `<link>` code

**In `index.html`** (replace line 13):
```html
<!-- Example: Using "Permanent Marker" -->
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
```

**In `styles.css`** (line 25):
```css
:root {
    --font-handwritten: 'Permanent Marker', cursive, sans-serif;
}
```

### Recommended Handwritten Fonts

```html
<!-- Caveat (Current) -->
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Shadows Into Light -->
<link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet">

<!-- Permanent Marker -->
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">

<!-- Indie Flower -->
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">

<!-- Pacifico -->
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

<!-- Dancing Script -->
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap" rel="stylesheet">
```

### Change Font Sizes

Edit `styles.css`:
```css
:root {
    --font-size-name: 48px;         /* Your name */
    --font-size-email: 24px;        /* Email address */
    --font-size-card-title: 28px;   /* Card titles */
    --font-size-card-subtitle: 20px; /* Card subtitles */
}
```

### Use a Modern Sans-Serif Font Instead

```html
<!-- In index.html -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
/* In styles.css */
:root {
    --font-handwritten: 'Inter', sans-serif;
}
```

---

## Images & Media

### Setting Up Images Folder

Create this folder structure:
```
uskawebsite/
├── images/
│   ├── avatar.jpg          # Your profile picture
│   ├── background.jpg      # Page background (optional)
│   ├── card-1.jpg          # Card image 1
│   ├── card-2.jpg          # Card image 2
│   └── ...
```

### Image Optimization Tips

1. **Resize images before uploading:**
   - Avatar: 400x400px
   - Background: 1920x1080px
   - Card images: 1200x630px

2. **Compress images:**
   - Use [TinyPNG](https://tinypng.com)
   - Or [Squoosh](https://squoosh.app)
   - Target: < 500KB per image

3. **Convert to WebP (optional but recommended):**
   - Better compression
   - Faster loading
   - Modern browser support

### Using Unsplash Images

For high-quality placeholder images:

```javascript
// Avatar
avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"

// Card images
thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=630&fit=crop"
```

**Browse Unsplash:** https://unsplash.com

---

## Links & Cards

### Add a New Simple Link

In `script.js`, add to the `links` array:

```javascript
{
    id: "youtube-channel",
    type: "simple-link",
    title: "YouTube",
    url: "https://youtube.com/@yourchannel",
    icon: "x-twitter",  // Use existing icon
    priority: 7,
    enabled: true
}
```

### Add a New Image Showcase Card

```javascript
{
    id: "portfolio",
    type: "image-showcase",
    title: "My Portfolio",
    subtitle: "Check out my latest work",
    url: "https://yourportfolio.com",
    thumbnail: "images/portfolio.jpg",
    priority: 1,
    enabled: true
}
```

### Add an Image Grid Card

```javascript
{
    id: "gallery",
    type: "image-showcase",
    title: "Photo Gallery",
    subtitle: "My latest shots",
    url: "https://yourgallery.com",
    imageGallery: [
        "images/gallery-1.jpg",
        "images/gallery-2.jpg",
        "images/gallery-3.jpg"
    ],
    priority: 2,
    enabled: true
}
```

### Disable a Link (Without Deleting)

Set `enabled: false`:
```javascript
{
    id: "old-link",
    // ...
    enabled: false  // This link won't be shown
}
```

### Change Link Order

Change the `priority` number (lower = appears first):
```javascript
{
    id: "important-link",
    priority: 1,  // Shows first
    // ...
}

{
    id: "less-important",
    priority: 10,  // Shows last
    // ...
}
```

### Add Social Links

In `script.js`, update `socialLinks`:

```javascript
socialLinks: [
    {
        platform: "email",
        url: "mailto:your@email.com",
        displayInHeader: true
    },
    {
        platform: "instagram",
        url: "https://instagram.com/yourusername",
        displayInHeader: true
    },
    {
        platform: "tiktok",
        url: "https://tiktok.com/@yourusername",
        displayInHeader: true
    },
    // Add more...
]
```

**Note:** Currently only the 6 platforms in the HTML are displayed. To add more, you'll need to add the SVG icons in `index.html`.

---

## Advanced Customization

### Add Custom Icons

To add a new icon to simple link cards:

1. **Find an SVG icon** (from [Heroicons](https://heroicons.com), [Feather Icons](https://feathericons.com), etc.)

2. **Add to `getIconSVG()` function** in `script.js`:

```javascript
function getIconSVG(iconName) {
    const icons = {
        'youtube': `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        `,
        // ... existing icons
    };
    return icons[iconName] || icons['x-twitter'];
}
```

3. **Use in your link:**
```javascript
{
    type: "simple-link",
    title: "YouTube",
    icon: "youtube",  // Your new icon
    // ...
}
```

### Change Card Border Radius

More or less rounded cards:

```css
:root {
    --radius-card: 16px;   /* Default: 16px */
}

/* Try these: */
--radius-card: 24px;   /* More rounded */
--radius-card: 8px;    /* Less rounded */
--radius-card: 4px;    /* Slightly rounded */
--radius-card: 0px;    /* Square corners */
```

### Adjust Card Hover Animation

Change how much cards lift on hover:

```css
.link-card:hover {
    transform: translateY(-4px);  /* Default: -4px */
}

/* Try: */
transform: translateY(-8px);   /* Lift more */
transform: translateY(-2px);   /* Lift less */
```

### Change Animation Speed

```css
:root {
    --transition-smooth: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Faster: */
--transition-smooth: all 150ms ease;

/* Slower: */
--transition-smooth: all 500ms ease;
```

### Modify Card Shadow Intensity

```css
:root {
    --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.08);
    --shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Stronger shadows: */
--shadow-card: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-card-hover: 0 12px 32px rgba(0, 0, 0, 0.2);

/* Lighter shadows: */
--shadow-card: 0 1px 6px rgba(0, 0, 0, 0.04);
--shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.08);
```

### Change Card Transparency

Make cards more or less transparent:

```css
:root {
    --color-card-bg: rgba(255, 255, 255, 0.95);  /* 95% opaque */
}

/* More transparent (more blur shows through): */
--color-card-bg: rgba(255, 255, 255, 0.85);  /* 85% opaque */

/* Less transparent (more solid): */
--color-card-bg: rgba(255, 255, 255, 0.98);  /* 98% opaque */

/* Fully opaque (no transparency): */
--color-card-bg: rgba(255, 255, 255, 1);
```

### Add Custom CSS Classes

You can add custom styling for specific cards:

**In `script.js`**, add class to card:
```javascript
function createImageShowcaseCard(link) {
    const card = document.createElement('a');
    card.className = 'link-card image-showcase-card';
    
    // Add custom class based on ID
    if (link.id === 'featured-link') {
        card.classList.add('featured-card');
    }
    // ...
}
```

**In `styles.css`**, style the custom class:
```css
.featured-card {
    border: 2px solid var(--color-accent);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
}
```

---

## 🎨 Ready-Made Color Schemes

Copy and paste these into your `styles.css`:

### Ocean Breeze
```css
:root {
    --color-accent: #0093E9;
}
.page-background {
    background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%);
}
```

### Sunset Vibes
```css
:root {
    --color-accent: #ff6b6b;
}
.page-background {
    background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
}
```

### Forest Green
```css
:root {
    --color-accent: #71B280;
}
.page-background {
    background: linear-gradient(135deg, #134E5E 0%, #71B280 100%);
}
```

### Candy Pop
```css
:root {
    --color-accent: #f5576c;
}
.page-background {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Midnight Blue
```css
:root {
    --color-accent: #3498db;
}
.page-background {
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
}
```

---

## 💡 Pro Tips

1. **Test on Mobile**: Always check how it looks on your phone
2. **Optimize Images**: Compress before uploading for faster load times
3. **Keep It Simple**: Don't add too many links (5-8 is ideal)
4. **Use Brand Colors**: Match your brand/personal colors
5. **Update Regularly**: Keep your links fresh and relevant
6. **Check Contrast**: Ensure text is readable against backgrounds
7. **Test Links**: Click every link to make sure they work
8. **Backup Your Data**: Save a copy of your customized files

---

## 🆘 Need Help?

- Check `IMPLEMENTATION-README.md` for technical details
- Review `VISUAL-SPECS.md` for design specifications
- Use `AI-PROMPT-TEMPLATE.md` to ask AI for help

---

**Happy Customizing! 🎉**

Make it uniquely yours and have fun with it!

