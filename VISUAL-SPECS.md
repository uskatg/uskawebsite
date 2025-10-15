# Visual Design Specifications

Quick reference guide for implementing the Linktree-style profile page design.

---

## 🎨 Color Palette

### Primary Colors
```
Background Cards:        rgba(255, 255, 255, 0.95)
Background Blur:         backdrop-filter: blur(20px)
Text Primary:            #000000
Text Secondary:          #333333
Text Muted:              #666666
Accent:                  #0066ff
```

### Shadows
```
Card Default:            0 2px 12px rgba(0, 0, 0, 0.08)
Card Hover:              0 8px 24px rgba(0, 0, 0, 0.15)
Card Border:             1px solid rgba(0, 0, 0, 0.08)
```

---

## 📏 Spacing System

### Global Spacing
```
Section Gap:             24px
Card Gap:                16px
Card Padding:            20px
Icon Gap:                24px
Mobile Padding:          16px
```

### Layout
```
Max Width:               680px
Alignment:               center
Mobile Breakpoint:       640px
Tablet Breakpoint:       1024px
```

---

## 🔤 Typography Scale

### Profile Section
```
Profile Name:
  • Font Size: 48px (mobile: 36px)
  • Font Weight: 700
  • Line Height: 1.2
  • Font Family: Handwritten/Cursive
  • Text Transform: UPPERCASE
  • Letter Spacing: 0.02em
  • Color: #000000
  • Margin Bottom: 24px

Email:
  • Font Size: 24px (mobile: 18px)
  • Font Weight: 600
  • Font Family: Handwritten/Cursive
  • Text Decoration: underline
  • Underline Thickness: 2px
  • Color: #000000
  • Margin Bottom: 8px
```

### Card Text
```
Card Title:
  • Font Size: 28px (mobile: 22px)
  • Font Weight: 600
  • Font Family: Handwritten/Cursive
  • Color: #000000
  • Margin Bottom: 8px

Card Subtitle:
  • Font Size: 20px
  • Font Weight: 400
  • Font Family: Handwritten/Cursive
  • Color: #333333
```

### Recommended Fonts
```
Primary:   Caveat, Shadows Into Light, Permanent Marker
Fallback:  cursive, sans-serif
```

---

## 🖼️ Component Specifications

### 1. Top Navigation Bar
```
Position:                absolute
Top:                     24px
Left/Right:              24px
Display:                 flex
Justify:                 space-between
Z-index:                 10

Icon Buttons:
  • Size: 56px × 56px
  • Border Radius: 50%
  • Background: rgba(255, 255, 255, 0.9)
  • Icon Size: 24px
  • Color: #000000
  • Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
  
Buttons (3):
  1. Left - Menu/Asterisk icon
  2. Center-Right - Bell/Notification icon
  3. Right - Share icon
```

### 2. Profile Avatar
```
Size:                    120px × 120px
Border Radius:           50%
Border:                  4px solid rgba(255, 255, 255, 0.9)
Margin Top:              100px
Margin Bottom:           20px
Position:                center
Box Shadow:              0 4px 12px rgba(0, 0, 0, 0.1)
```

### 3. Social Icons Row
```
Display:                 flex
Justify:                 center
Gap:                     24px (mobile: 16px)
Margin Bottom:           32px

Each Icon:
  • Size: 48px × 48px (mobile: 40px)
  • Color: #000000
  • Hover: scale(1.1)
  • Transition: 200ms ease
  • Min Touch Target: 48px × 48px
```

### 4. Image Showcase Card
```
Display:                 block
Background:              rgba(255, 255, 255, 0.95)
Border Radius:           16px
Padding:                 20px
Backdrop Filter:         blur(20px)
Box Shadow:              0 2px 12px rgba(0, 0, 0, 0.08)
Margin Bottom:           16px
Cursor:                  pointer
Position:                relative

Image Container:
  • Aspect Ratio: 16:9 or auto
  • Border Radius: 12px
  • Overflow: hidden
  • Margin Bottom: 16px
  • Object Fit: cover
  
For Image Grid (multiple images):
  • Display: grid
  • Grid Template: auto / repeat(auto-fit, minmax(200px, 1fr))
  • Gap: 8px

Three-Dot Menu:
  • Position: absolute
  • Right: 20px
  • Top: 50% (transform: translateY(-50%))
  • Size: 24px
  • Color: #666666
  • Cursor: pointer

HOVER STATE:
  • Transform: translateY(-4px)
  • Shadow: 0 8px 24px rgba(0, 0, 0, 0.15)
  • Background: rgba(255, 255, 255, 1)
  • Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### 5. Simple Link Card
```
Display:                 flex
Align Items:             center
Background:              rgba(255, 255, 255, 0.95)
Border Radius:           16px
Padding:                 24px
Backdrop Filter:         blur(20px)
Box Shadow:              0 2px 12px rgba(0, 0, 0, 0.08)
Margin Bottom:           16px
Cursor:                  pointer
Gap:                     20px
Position:                relative

Icon:
  • Size: 56px × 56px
  • Border Radius: 50%
  • Background: #000000 (or platform color)
  • Color: #ffffff
  • Flex Shrink: 0

Text:
  • Flex: 1
  • Font Size: 24px
  • Font Weight: 600
  • Text Align: center
  • Color: #000000

Three-Dot Menu:
  • Position: absolute
  • Right: 20px
  • Size: 24px
  • Color: #666666

HOVER STATE:
  • Same as Image Showcase Card
```

---

## 🎬 Animation Specifications

### Hover Animations
```css
.card {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
}
```

### Page Load Animation
```
Type:                    Fade In Up
Duration:                600ms
Stagger:                 100ms per element
Timing:                  ease-out
Initial State:           opacity: 0, translateY(20px)
Final State:             opacity: 1, translateY(0)
```

### Click Animation
```css
.card:active {
  transform: translateY(-2px);
  transition: all 100ms ease;
}
```

### Icon Hover
```css
.social-icon:hover {
  transform: scale(1.1);
  transition: transform 200ms ease;
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
```
Layout:
  • Padding: 16px
  • Max Width: 100%
  
Typography:
  • Profile Name: 36px
  • Email: 18px
  • Card Title: 22px
  • Card Subtitle: 18px
  
Components:
  • Social Icons: 40px
  • Icon Gap: 16px
  • Top Nav Icons: 48px
  • Avatar: 100px
  
Spacing:
  • Section Gap: 20px
  • Card Gap: 12px
  • Card Padding: 16px
```

### Tablet (640px - 1024px)
```
Layout:
  • Padding: 20px
  • Max Width: 600px
  
Typography:
  • Standard sizes
  
Components:
  • Standard sizes
  
Spacing:
  • Standard spacing
```

### Desktop (> 1024px)
```
Layout:
  • Padding: 24px
  • Max Width: 680px
  
Typography:
  • Full sizes
  
Components:
  • Full sizes
  
Spacing:
  • Full spacing
  • Enhanced hover effects enabled
```

---

## 🖼️ Image Guidelines

### Avatar Image
```
Dimensions:              400px × 400px minimum
Aspect Ratio:            1:1 (square)
Format:                  PNG or JPEG
File Size:               < 500KB
Quality:                 High (90%)
Display:                 Circular crop
```

### Background Image
```
Dimensions:              1920px × 1080px
Aspect Ratio:            16:9
Format:                  JPEG (optimized)
File Size:               < 1MB
Quality:                 Medium-High (80%)
Effect:                  Blurred (CSS blur)
```

### Card Images (Full-Width)
```
Dimensions:              1200px × 630px
Aspect Ratio:            ~1.91:1
Format:                  JPEG or WebP
File Size:               < 500KB per image
Quality:                 High (85%)
Display:                 Cover, centered
```

### Card Images (Grid)
```
Dimensions:              800px × 800px per image
Aspect Ratio:            1:1
Format:                  JPEG or WebP
File Size:               < 300KB per image
Quality:                 High (85%)
Max Images:              6 per grid
```

---

## 🎯 Interactive States

### Default State
```
Cursor:                  default
Opacity:                 1
Transform:               none
```

### Hover State (Cards)
```
Cursor:                  pointer
Transform:               translateY(-4px)
Shadow:                  0 8px 24px rgba(0, 0, 0, 0.15)
Background:              rgba(255, 255, 255, 1)
Transition:              300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Active/Click State
```
Transform:               translateY(-2px)
Transition:              100ms ease
```

### Focus State (Keyboard)
```
Outline:                 2px solid #0066ff
Outline Offset:          2px
Border Radius:           inherit
```

### Disabled State
```
Opacity:                 0.5
Cursor:                  not-allowed
Pointer Events:          none
```

---

## ♿ Accessibility Requirements

### Color Contrast
```
Large Text (18px+):      3:1 minimum
Normal Text:             4.5:1 minimum
Interactive Elements:    3:1 minimum

Current Ratios:
  • Black on White: 21:1 ✓
  • #333 on White: 12.6:1 ✓
  • #666 on White: 5.7:1 ✓
```

### Focus Indicators
```
Outline:                 2px solid
Color:                   High contrast
Offset:                  2px
Visible:                 Always on focus
```

### Touch Targets
```
Minimum Size:            48px × 48px
Recommended:             56px × 56px (for icons)
Spacing:                 8px minimum between targets
```

### Alt Text
```
Avatar:                  "Profile picture of [Name]"
Card Images:             Descriptive text of content
Decorative Images:       alt="" (empty)
```

---

## 🔧 CSS Implementation Examples

### Glassmorphism Card
```css
.card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 20px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Hover Effect
```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
}
```

### Handwritten Text
```css
.handwritten {
  font-family: 'Caveat', 'Shadows Into Light', cursive;
  font-weight: 600;
  letter-spacing: 0.02em;
}
```

### Blur Background
```css
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(40px);
  transform: scale(1.1);
}
```

---

## 📐 Layout Grid

```
┌─────────────────────────────────────┐
│         [Top Navigation]            │ ← Absolute positioned
│     [*]      [🔔]      [↗]         │
├─────────────────────────────────────┤
│                                     │
│            [Avatar]                 │ ← 120px circle
│                                     │
│            MANFUNG                  │ ← 48px bold
│                                     │
│     [✉] [𝕏] [📷] [🎨] [💬] [@]    │ ← 48px icons
│                                     │
│      manfungstudio@gmail.com       │ ← 24px underlined
│   ───────────────────────────      │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐ │
│  │       [Card Image]            │ │
│  │                               │ │
│  │  Discord | 病監院收容所        │ │ ← Image Card
│  │  Discord Server • Free        │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │   [Image Grid - 2 cols]       │ │
│  │                               │ │ ← Image Grid Card
│  │  Patreon | Pay床              │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [Icon]    Instagram        ⋮  │ │ ← Simple Link
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [Icon]    X                ⋮  │ │ ← Simple Link
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [Icon]    Facebook         ⋮  │ │ ← Simple Link
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘

Max Width: 680px
Padding: 24px (mobile: 16px)
Background: Blurred image
```

---

## ✅ Design Checklist

### Visual Design
- [ ] Glassmorphism effect on all cards
- [ ] Consistent 16px border radius
- [ ] Handwritten fonts for all text
- [ ] Proper spacing (24px sections, 16px cards)
- [ ] Shadow elevation on cards
- [ ] Semi-transparent backgrounds

### Interactions
- [ ] Smooth 300ms hover transitions
- [ ] 4px lift on card hover
- [ ] Enhanced shadows on hover
- [ ] Icon scale on hover
- [ ] Click feedback animations
- [ ] Loading states for images

### Responsive
- [ ] Works on mobile (< 640px)
- [ ] Works on tablet (640px - 1024px)
- [ ] Works on desktop (> 1024px)
- [ ] Font sizes adjust properly
- [ ] Touch targets are adequate
- [ ] No horizontal scroll

### Accessibility
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Alt text on images
- [ ] Reduced motion support

### Performance
- [ ] Images optimized
- [ ] Lazy loading implemented
- [ ] CSS is minimal
- [ ] No layout shift
- [ ] Fast load time (< 3s)

---

**Quick Reference**: All measurements in pixels unless specified. Use rem for better accessibility (1rem = 16px).

