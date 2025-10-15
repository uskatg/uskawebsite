# Linktree Clone Design System

A comprehensive JSON-based design system for creating visually appealing link-in-bio profile pages inspired by modern Linktree designs.

## 📁 Files Overview

### 1. `design-system.json`
The complete visual design system that defines:
- **Layout specifications**: Column structure, spacing, background effects
- **Color schemes**: Primary/secondary colors, card styles, shadows
- **Typography**: Font sizes, weights, families for all text elements
- **Component definitions**: Detailed specs for profile header and link cards
- **Animations**: Hover effects, transitions, and page load animations
- **Responsive breakpoints**: Mobile and tablet adjustments
- **Design principles**: Visual, UX, and accessibility guidelines

### 2. `profile-schema.json`
The data structure schema that defines:
- **Profile structure**: Username, avatar, email, background
- **Social links format**: Platform types and display options
- **Link items structure**: Different card types and their properties
- **Validation rules**: Data constraints and requirements
- **Example profile**: Reference implementation

## 🎨 Design System Highlights

### Visual Style
- **Glassmorphism aesthetic** with backdrop blur effects
- **Handwritten/cursive typography** for a personal touch
- **Card-based layout** with consistent 16px border radius
- **Subtle shadows and hover animations** for depth
- **Semi-transparent backgrounds** for modern look

### Component Types

#### 1. Profile Header
```
- Top navigation icons (settings, notifications, share)
- Circular avatar (120px)
- Large handwritten name
- Social media icon row (6+ platforms)
- Prominent email display
```

#### 2. Image Showcase Card
```
- Full-width or grid image layout
- Title and optional subtitle
- Handwritten font styling
- Three-dot menu button
- Hover lift animation
```

#### 3. Simple Link Card
```
- Icon + text horizontal layout
- Centered text with handwritten font
- Clean, minimal design
- Three-dot menu button
- Hover effects
```

## 🚀 How to Use This Design System

### For Developers

1. **Read the design system**:
   ```javascript
   import designSystem from './design-system.json';
   const { typography, colorScheme, components } = designSystem;
   ```

2. **Implement components** based on the specifications:
   ```jsx
   // Example: Profile Header
   <ProfileHeader
     style={{
       fontSize: designSystem.typography.profileName.fontSize,
       fontWeight: designSystem.typography.profileName.fontWeight,
       // ... other properties
     }}
   />
   ```

3. **Use the profile schema** to structure your data:
   ```javascript
   import profileSchema from './profile-schema.json';
   // Use exampleProfile as a template
   const myProfile = {
     username: "YourName",
     // ... follow the schema structure
   };
   ```

### For AI/LLM Context

When giving this to an AI to replicate the design:

**Prompt Example**:
```
I want to create a Linktree-style profile page. Here's my design system:
[Paste design-system.json]

And here's my profile data:
[Paste your profile data following profile-schema.json structure]

Please create a React component that implements this design system.
```

## 🎯 Key Design Principles

### Visual Design
1. **Glassmorphism First**: Use `backdrop-filter: blur(20px)` on all cards
2. **Consistent Spacing**: 24px between sections, 16px between cards
3. **Subtle Interactions**: 300ms transitions with ease-out timing
4. **High Contrast**: Ensure text is readable against blurred backgrounds
5. **Rounded Corners**: 16px border radius for cards, 50% for circles

### User Experience
1. **Clear Affordances**: Cards should look clickable
2. **Smooth Animations**: Hover states should feel responsive
3. **Touch-Friendly**: Minimum 48x48px touch targets
4. **Visual Hierarchy**: Larger elements = more important
5. **Consistent Patterns**: Same card style for similar content

### Accessibility
1. **Color Contrast**: Minimum 4.5:1 ratio for text
2. **Focus Indicators**: Clear keyboard navigation
3. **Alt Text**: All images need descriptions
4. **Reduced Motion**: Support `prefers-reduced-motion`
5. **Semantic HTML**: Use proper heading levels

## 📱 Responsive Behavior

### Mobile (<640px)
- Reduce font sizes by ~25%
- Decrease icon sizes
- Adjust padding to 16px
- Stack social icons if needed

### Tablet (640px-1024px)
- Max width 600px
- Standard font sizes
- Full spacing

### Desktop (>1024px)
- Max width 680px
- All design features enabled
- Enhanced hover effects

## 🎨 Customization Guide

### Changing Colors
Edit `colorScheme` in `design-system.json`:
```json
{
  "colorScheme": {
    "primary": {
      "accent": "#YOUR_COLOR"
    }
  }
}
```

### Changing Typography
Edit `typography` section:
```json
{
  "typography": {
    "profileName": {
      "fontFamily": "YOUR_FONT, cursive"
    }
  }
}
```

### Adding New Card Types
Add to `components.linkCard.variants`:
```json
{
  "type": "your-new-card-type",
  "name": "Descriptive Name",
  "structure": { /* your styles */ }
}
```

## 🔧 Technical Implementation

### Recommended Stack
- **Framework**: React, Vue, Next.js, or Nuxt
- **Styling**: Tailwind CSS or styled-components
- **Animations**: Framer Motion or CSS transitions
- **State**: React Context or Pinia/Vuex

### CSS Properties to Use
```css
.card {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

## 📊 Data Structure Example

```json
{
  "username": "YOURNAME",
  "email": "your@email.com",
  "avatar": "/path/to/avatar.jpg",
  "backgroundImage": "/path/to/background.jpg",
  "socialLinks": [
    {
      "platform": "instagram",
      "url": "https://instagram.com/yourusername",
      "displayInHeader": true
    }
  ],
  "links": [
    {
      "id": "link-1",
      "type": "image-showcase",
      "title": "My Portfolio",
      "subtitle": "Check out my work",
      "url": "https://portfolio.com",
      "thumbnail": "/images/portfolio.jpg",
      "priority": 1
    }
  ]
}
```

## 🎨 Font Recommendations

For the handwritten/cursive style:
- **Caveat** (Google Fonts)
- **Shadows Into Light**
- **Permanent Marker**
- **Indie Flower**
- **Dancing Script**

## 📸 Image Guidelines

### Avatar
- **Size**: 400x400px minimum
- **Format**: PNG or JPEG
- **Style**: Circular crop, high quality

### Background
- **Size**: 1920x1080px recommended
- **Format**: JPEG (optimized)
- **Style**: Slightly blurred, artistic

### Card Images
- **Size**: 1200x630px for full-width cards
- **Format**: JPEG or WebP
- **Style**: High quality, web-optimized

## 🚀 Getting Started

1. Copy `design-system.json` and `profile-schema.json` to your project
2. Create your profile data following the schema
3. Implement components based on the design system specs
4. Test responsiveness at different breakpoints
5. Ensure accessibility standards are met

## 📝 License

This design system is created for educational purposes based on publicly available Linktree interface patterns.

---

**Reference**: Based on analysis of modern link-in-bio profile pages
**Version**: 1.0.0
**Last Updated**: October 2025

