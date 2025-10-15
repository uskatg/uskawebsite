# AI Prompt Template for Building Linktree Clone

Use this template when working with AI assistants (like Cursor, ChatGPT, Claude) to build your Linktree-style profile page.

---

## 🎯 Quick Start Prompt

```
I want to create a modern Linktree-style profile page with these specifications:

DESIGN SYSTEM:
- Glassmorphism aesthetic with backdrop blur effects
- Handwritten/cursive typography
- Card-based layout with smooth hover animations
- Semi-transparent white cards on blurred background
- Mobile-responsive design

KEY COMPONENTS NEEDED:
1. Profile header with avatar, name, and social icons
2. Prominent email display
3. Image showcase cards (with single image or image grid)
4. Simple link cards (icon + text)
5. Smooth hover animations and transitions

TECHNICAL REQUIREMENTS:
- Framework: [React/Vue/Next.js]
- Styling: [Tailwind/CSS Modules/styled-components]
- Must be fully responsive
- Accessibility compliant

Please refer to the design-system.json file for exact specifications.
```

---

## 🎨 Detailed Design Specifications Prompt

```
Create a Linktree clone with these exact design specifications:

LAYOUT:
- Single column, max-width 680px
- Center aligned
- 24px gap between sections
- 16px gap between cards
- Blurred background image

COLOR SCHEME:
- Cards: rgba(255, 255, 255, 0.95) with backdrop-filter: blur(20px)
- Text: #000000 (primary), #333333 (secondary)
- Shadows: 0 2px 12px rgba(0, 0, 0, 0.08)
- Hover shadow: 0 8px 24px rgba(0, 0, 0, 0.15)

TYPOGRAPHY:
- Profile name: 48px, weight 700, handwritten font, uppercase
- Email: 24px, weight 600, handwritten font, underlined
- Card titles: 28px, weight 600, handwritten font
- Card subtitles: 20px, weight 400, handwritten font

PROFILE HEADER:
1. Top navigation bar with 3 icons (left, center-right, right)
   - Icon size: 56px
   - Background: white rounded circles
   - Icons: asterisk/menu, bell, share
2. Avatar (120px, circular, 4px white border)
3. Profile name (large, handwritten)
4. Social icons row (48px icons, 24px gap)
   - Email, X/Twitter, Instagram, Patreon, Discord, Threads
5. Email address (prominent, underlined)

LINK CARD TYPES:

Type 1 - Image Showcase Card:
- Full-width or grid image layout
- Image with 12px border-radius
- Title (28px, handwritten)
- Optional subtitle (20px, handwritten)
- Three-dot menu button (top-right)
- Hover: lift 4px, enhanced shadow

Type 2 - Simple Link Card:
- Horizontal layout (icon + text)
- Icon (56px, circular, black background)
- Text (24px, handwritten, centered)
- Three-dot menu button (right)
- Hover: lift 4px, enhanced shadow

ANIMATIONS:
- All transitions: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- Hover: translateY(-4px)
- Page load: fade-in-up with 100ms stagger

RESPONSIVE:
Mobile (<640px):
- Profile name: 36px
- Email: 18px
- Card titles: 22px
- Social icons: 40px with 16px gap
- Padding: 16px

Please implement this with proper semantic HTML and accessibility features.
```

---

## 💻 Component-Specific Prompts

### Profile Header Component
```
Create a ProfileHeader component with:
- Absolute positioned top nav with 3 icon buttons
- Centered circular avatar (120px)
- Large handwritten name display
- Row of social media icons
- Prominent email address with underline

Style with glassmorphism and ensure it's responsive.
Refer to design-system.json section: components.profileHeader
```

### Link Card Component
```
Create a LinkCard component that supports two variants:

1. ImageShowcaseCard:
   - Takes image(s), title, optional subtitle
   - Supports single image or grid layout
   - Has three-dot menu button
   - Glassmorphism background
   - Hover animation (lift + shadow)

2. SimpleLinkCard:
   - Takes icon and title
   - Horizontal layout
   - Three-dot menu button
   - Same styling and animations

Both should use handwritten fonts and follow the design system.
Refer to design-system.json section: components.linkCard.variants
```

### Animation System
```
Implement these animations:
1. Card hover: translateY(-4px) over 300ms
2. Page load: fade-in-up with stagger
3. Click feedback: slight scale
4. Respect prefers-reduced-motion

Use Framer Motion or CSS transitions.
Refer to design-system.json section: animations
```

---

## 📊 Data Structure Prompt

```
I need to structure my profile data. Here's my information:

USERNAME: [Your name]
EMAIL: [Your email]
AVATAR: [Path or URL]
BACKGROUND: [Path or URL]

SOCIAL LINKS:
- Instagram: [URL]
- Twitter/X: [URL]
- [Add more...]

LINK CARDS:
1. [Title] - [Type: image-showcase/simple-link]
   - Subtitle: [if applicable]
   - URL: [destination]
   - Image(s): [if applicable]

2. [Continue...]

Please structure this according to the profile-schema.json format and create the appropriate JSON data file.
```

---

## 🎨 Styling Prompt

```
I need CSS/styling for a glassmorphism Linktree clone:

REQUIREMENTS:
- Backdrop blur on all cards (20px)
- Semi-transparent white backgrounds
- Smooth hover transitions
- Rounded corners (16px for cards, 50% for circles)
- Shadow elevation system
- Mobile-responsive

STYLING APPROACH: [Tailwind/CSS Modules/styled-components]

Please provide the complete styling system with:
1. Base card styles
2. Hover states
3. Responsive breakpoints
4. Animation keyframes
5. Utility classes/mixins

Reference the design-system.json colorScheme and typography sections.
```

---

## 🚀 Full Implementation Prompt

```
Build a complete Linktree-style profile page application:

STACK:
- Framework: [React/Vue/Next.js]
- Styling: [Tailwind CSS/styled-components]
- Animations: [Framer Motion/CSS]

FEATURES REQUIRED:
1. Profile header with avatar and social links
2. Multiple card types (image showcase, simple links)
3. Smooth animations and transitions
4. Fully responsive design
5. Accessibility features (WCAG 2.1 AA)
6. Performance optimized (lazy loading, image optimization)

DESIGN SYSTEM:
Please follow the complete specifications in design-system.json:
- Layout and spacing
- Color scheme and shadows
- Typography (handwritten fonts)
- Component structures
- Animation timings
- Responsive breakpoints

DATA STRUCTURE:
Use profile-schema.json for data modeling:
- Profile information
- Social links array
- Links array with different types
- Validation rules

DELIVERABLES:
1. All component files
2. Styling/CSS files
3. Sample data JSON file
4. README with setup instructions
5. Responsive and accessible

Start with the main page component and work through each section systematically.
```

---

## 🎯 Iteration Prompts

### Refinement
```
The design is close but needs adjustments:
- [Specific issue 1]
- [Specific issue 2]

Please refer back to design-system.json specifications for:
- [Section to check]
And make the necessary corrections.
```

### Adding Features
```
Add [new feature] to the profile page:
- Should match the existing glassmorphism aesthetic
- Follow the typography system (handwritten fonts)
- Include hover animations (300ms, lift 4px)
- Be mobile responsive

Maintain consistency with the current design system.
```

### Performance Optimization
```
Optimize the profile page for performance:
- Lazy load images
- Use WebP format with fallbacks
- Implement blur-up effect for images
- Minimize CSS
- Code split components

Maintain the visual design from design-system.json.
```

---

## 📱 Responsive Testing Prompt

```
Test and fix responsive design for:

MOBILE (< 640px):
- Profile name should be 36px
- Cards should have 16px padding
- Social icons should be 40px
- Stack properly without overflow

TABLET (640px - 1024px):
- Max width 600px
- Standard spacing
- All features visible

DESKTOP (> 1024px):
- Max width 680px
- Full hover effects
- Optimal spacing

Check design-system.json responsive section and fix any issues.
```

---

## ♿ Accessibility Prompt

```
Ensure the profile page meets WCAG 2.1 AA standards:

REQUIREMENTS:
1. Color contrast minimum 4.5:1
2. Keyboard navigation with focus indicators
3. Alt text for all images
4. Semantic HTML structure
5. ARIA labels where needed
6. Support for prefers-reduced-motion
7. Screen reader friendly

Test with accessibility tools and fix any issues.
Reference: design-system.json designPrinciples.accessibility
```

---

## 💡 Tips for Using These Prompts

1. **Be Specific**: Always mention which JSON file and section to reference
2. **Iterate**: Start with the quick prompt, then refine with specific prompts
3. **Provide Context**: Share your tech stack preferences upfront
4. **Reference Files**: Point to design-system.json and profile-schema.json
5. **Test Often**: Ask for responsive and accessibility checks
6. **Keep Consistency**: Remind AI to maintain design system consistency

---

## 📚 Additional Resources to Mention

When working with AI, you can also mention:
- "Follow modern React/Vue best practices"
- "Use semantic HTML5 elements"
- "Implement proper TypeScript types"
- "Add helpful code comments"
- "Include error handling"
- "Optimize for performance"

---

**Pro Tip**: Copy the relevant sections from `design-system.json` directly into your prompts for more accurate results!

