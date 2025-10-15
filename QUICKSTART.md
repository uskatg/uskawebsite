# ⚡ Quick Start Guide

Get your Linktree clone up and running in **5 minutes**!

## 🎯 What You Have

A complete, working Linktree-style profile page with:
- ✅ Beautiful glassmorphism design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Smooth animations
- ✅ 6 sample links (customizable)
- ✅ No build tools required

## 🚀 3 Steps to Launch

### Step 1: Customize Your Info (2 minutes)

Open `script.js` and edit lines 10-50:

```javascript
const profileData = {
    username: "YOUR NAME",              // ← Change this
    email: "your@email.com",            // ← Change this
    avatar: "your-avatar-url.jpg",      // ← Change this
    // ...
};
```

### Step 2: Update Your Links (2 minutes)

Scroll to the `links` array in `script.js` (around line 52):

```javascript
links: [
    {
        id: "link-1",
        type: "simple-link",
        title: "My Website",           // ← Your link title
        url: "https://yourwebsite.com", // ← Your URL
        icon: "x-twitter",
        priority: 1,
        enabled: true
    },
    // Add more links...
]
```

### Step 3: Open in Browser (30 seconds)

**Option A - Just Open It:**
```bash
# Simply double-click index.html
```

**Option B - Use a Local Server (recommended):**
```bash
# With Python
python -m http.server 8000

# Or with Node.js
npx serve

# Then visit: http://localhost:8000
```

## 🎨 Quick Customizations

### Change Colors (30 seconds)

Edit `styles.css` line 17:
```css
--color-accent: #0066ff;  /* Your brand color */
```

Change background gradient (line 75):
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Font (1 minute)

1. Pick a font from [Google Fonts](https://fonts.google.com)
2. Replace line 13 in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```
3. Update line 25 in `styles.css`:
```css
--font-handwritten: 'YourFont', cursive, sans-serif;
```

### Add Your Images (2 minutes)

1. Create an `images` folder
2. Add your images:
   - `avatar.jpg` (400x400px)
   - `background.jpg` (1920x1080px - optional)
   - Any card images you want

3. Update paths in `script.js`:
```javascript
avatar: "images/avatar.jpg",
backgroundImage: "images/background.jpg",
```

## 📱 Test It

1. **Desktop**: Resize browser window
2. **Mobile**: Open on your phone (use local network IP)
3. **Tablet**: Test in tablet mode

## 🚀 Deploy It (5 minutes)

### Easiest: Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag your entire folder
3. Done! ✨

### Alternative: GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in Settings
4. Your site is live at `yourusername.github.io/repo-name`

## 📚 Next Steps

### Want to customize more?
→ Read `CUSTOMIZATION-GUIDE.md`

### Need technical details?
→ Check `IMPLEMENTATION-README.md`

### Want to understand the design?
→ Review `design-system.json` and `VISUAL-SPECS.md`

### Want AI to help?
→ Use prompts from `AI-PROMPT-TEMPLATE.md`

## 🎯 Common Tasks

### Add a New Link
```javascript
// In script.js, add to links array:
{
    id: "my-new-link",
    type: "simple-link",
    title: "My Link",
    url: "https://example.com",
    icon: "x-twitter",
    priority: 7,
    enabled: true
}
```

### Remove a Link
```javascript
// Set enabled to false:
enabled: false
```

### Change Link Order
```javascript
// Lower priority = shows first:
priority: 1  // Shows first
priority: 2  // Shows second
priority: 3  // Shows third
```

### Add an Image Card
```javascript
{
    type: "image-showcase",
    title: "My Portfolio",
    subtitle: "Check it out",
    thumbnail: "images/portfolio.jpg",
    url: "https://portfolio.com",
    priority: 1,
    enabled: true
}
```

## 🎨 Popular Color Schemes

Copy these into `styles.css`:

**Ocean:**
```css
--color-accent: #0093E9;
background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%);
```

**Sunset:**
```css
--color-accent: #ff6b6b;
background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
```

**Purple:**
```css
--color-accent: #9333ea;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## ✅ Checklist Before Launch

- [ ] Updated username
- [ ] Updated email
- [ ] Added avatar image
- [ ] Updated all links
- [ ] Tested all links work
- [ ] Checked on mobile
- [ ] Optimized images (< 500KB each)
- [ ] Tested in different browsers
- [ ] Added your brand colors
- [ ] Removed sample/placeholder content

## 🐛 Quick Fixes

**Images not showing?**
- Check file paths are correct
- Ensure images are in the right folder
- Use absolute URLs or proper relative paths

**Animations not smooth?**
- Test in a different browser
- Check your internet connection
- Reduce image file sizes

**Font not loading?**
- Verify Google Fonts link is correct
- Check font name matches in CSS
- Clear browser cache

## 💡 Pro Tips

1. **Keep it simple**: 5-8 links max
2. **Compress images**: Use [TinyPNG](https://tinypng.com)
3. **Test everything**: Click every link
4. **Mobile first**: Most visitors use mobile
5. **Update regularly**: Keep your links current

## 🎉 You're Ready!

Your beautiful link-in-bio page is ready to share with the world!

**Questions?** Check the other README files in this project.

**Share your creation** and tag us if you build something cool!

---

**Built with ❤️ - Now make it yours! 🚀**

Time to launch: **< 10 minutes** ⏱️

