# Design System & Language Guide

## Overview
This jewelry website follows a **minimal, professional, award-winning aesthetic** inspired by awwwards.com sites. The design emphasizes clean typography, subtle interactions, and sophisticated visual hierarchy.

---

## Design Principles

### 1. Minimalism First
- ❌ **AVOID**: Random gradients, excessive colors, generic icons, over-the-top animations
- ✅ **USE**: Clean layouts, ample white space, subtle interactions, professional photography
- Keep interfaces clean and uncluttered
- Let product imagery be the hero
- Typography and spacing create hierarchy, not colors

### 2. Consistency
- All sections should feel cohesive
- Reuse animation patterns, shadows, and effects
- Maintain the same design language throughout

### 3. Professional & Sophisticated
- Design should feel luxury and high-end
- Subtle, elegant interactions over flashy effects
- Quality over quantity in animations

---

## Color Palette

### Primary Colors
- **Background (Light)**: `bg-gray-50` - Used for alternating sections
- **Background (White)**: `bg-white` - Used for alternating sections
- **Primary Text**: `text-gray-900` - Headings and important text
- **Secondary Text**: `text-gray-600` - Body text and descriptions
- **Tertiary Text**: `text-gray-500` - Labels and metadata

### Accent Colors
- **Gold Gradient**: `from-gold-500 to-gold-700` - Used sparingly for decorative lines
- **Black Overlays**: `bg-black/60` - Hover overlays on images
- **White Overlays**: `text-white/70` - Text on dark backgrounds

### Badges & CTAs
- **Primary CTA**: `bg-gray-900 text-white` - Buttons and primary actions
- **Badge**: `bg-gray-900 text-white` - "New" badges, labels
- **Borders**: `border-gray-300` - Subtle borders, hover: `border-gray-900`

---

## Typography

### Font Families
- **Headings**: `font-serif` - All section titles, product names, elegant text
- **Body**: Default sans-serif - Descriptions, labels, metadata

### Size Scale
- **Hero Heading**: `text-7xl` (Desktop hero sections)
- **Section Heading**: `text-4xl md:text-5xl` (Section titles)
- **Product Name**: `text-lg` (Best Selling cards), `text-4xl md:text-5xl` (New Arrivals)
- **Body Text**: `text-sm` (Descriptions, metadata)
- **Labels**: `text-xs uppercase tracking-widest` (Category labels)

### Font Weights
- **Headings**: `font-medium` or `font-semibold`
- **Body**: `font-normal` (default)
- **Labels**: `font-light` (uppercase labels)

### Text Hierarchy
```jsx
// Section Header
<h2 className="text-4xl md:text-5xl font-serif text-gray-900">
  Section Title
</h2>

// Category Label
<p className="text-xs uppercase tracking-widest text-gray-500 font-light">
  CATEGORY
</p>

// Product Name
<h3 className="text-lg font-semibold text-gray-900 font-serif">
  Product Name
</h3>

// Description
<p className="text-sm text-gray-600 leading-relaxed">
  Description text
</p>
```

---

## Spacing & Layout

### Container
- **Max Width**: `max-w-7xl mx-auto` - All content containers
- **Padding**: `px-8` (horizontal), `py-20` (vertical sections)

### Grid Systems
- **Best Selling**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Featured Collections**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- **New Arrivals**: `grid-cols-1 lg:grid-cols-2` (2-column layout)

### Gap
- **Grid Gap**: `gap-6` or `gap-8` (between cards)
- **Content Gap**: `gap-4` (within components)

### Section Spacing
- **Section Padding**: `py-20` (top and bottom)
- **Header Margin**: `mb-12` (section header to content)

---

## Shadows & Effects

### Standard Shadow
```jsx
// Inner shadow on all images for depth
<div
  className="absolute inset-0 pointer-events-none"
  style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
/>
```

### Image Treatment
- All product images use inset shadow overlay
- Images should use `object-cover` for proper cropping
- Aspect ratios: `aspect-5/4` (Best Selling), `aspect-[3/4]` (Featured Collections), `aspect-square` (New Arrivals)

---

## Animations & Interactions

### Framer Motion Patterns

#### 1. Scroll-Triggered Reveal
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

#### 2. Hover Overlay (Standard Pattern)
```jsx
const [isHovered, setIsHovered] = useState(false);

// Overlay container
<motion.div
  className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: isHovered ? 1 : 0 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  {/* Category Label */}
  <motion.p
    className="text-white/70 text-xs uppercase tracking-widest font-light mb-2"
    initial={{ opacity: 0, y: 10 }}
    animate={{
      opacity: isHovered ? 1 : 0,
      y: isHovered ? 0 : 10
    }}
    transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
  >
    CATEGORY
  </motion.p>

  {/* Golden Line */}
  <motion.div
    className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-700 mb-3"
    initial={{ width: 0, opacity: 0 }}
    animate={{
      width: isHovered ? 64 : 0,
      opacity: isHovered ? 1 : 0
    }}
    transition={{ duration: 0.4, delay: 0.15 }}
  />

  {/* Title */}
  <motion.h3
    className="text-white text-xl font-serif font-medium tracking-wide text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={{
      opacity: isHovered ? 1 : 0,
      y: isHovered ? 0 : 10
    }}
    transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
  >
    Title
  </motion.h3>
</motion.div>
```

#### 3. Image Scale on Hover
```jsx
<motion.img
  src={image}
  alt={title}
  className="w-full h-full object-cover"
  animate={{ scale: isHovered ? 1.05 : 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
```

#### 4. Fade In/Out Transitions (Carousel)
```jsx
<AnimatePresence mode="wait">
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {/* Content */}
  </motion.div>
</AnimatePresence>
```

### Timing Guidelines
- **Fast interactions**: `0.3s` (hover states)
- **Standard transitions**: `0.5s` (page reveals)
- **Slow effects**: `0.6-0.8s` (image scales, carousel transitions)
- **Stagger delay**: `0.1s` between items

### Easing
- **Standard**: `ease: "easeInOut"`
- **Exit animations**: `ease: "easeOut"`
- **Natural curve**: `ease: [0.25, 0.4, 0.25, 1]`

---

## Component Patterns

### Card Structure (Best Selling / Featured Collections)
```jsx
<motion.div
  className="group cursor-pointer bg-white overflow-hidden"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Image Container */}
  <div className="relative aspect-[3/4] overflow-hidden">
    <motion.img src={image} className="w-full h-full object-cover" />

    {/* Inner shadow */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
    />

    {/* Hover Overlay */}
    <motion.div className="absolute inset-0 bg-black/60">
      {/* Overlay content */}
    </motion.div>
  </div>

  {/* Text Content */}
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-900 font-serif">
      {title}
    </h3>
    <p className="text-sm text-gray-600">
      {description}
    </p>
  </div>
</motion.div>
```

### Section Header Pattern
```jsx
<div className="mb-12">
  <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
    Section Title
  </h2>
</div>
```

### Navigation Buttons
```jsx
<button className="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
  <div className="w-10 h-10 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
    <ChevronLeft className="w-4 h-4" />
  </div>
  <span className="uppercase tracking-wider text-xs">Previous</span>
</button>
```

### CTA Button
```jsx
<button className="group relative px-8 py-3 bg-gray-900 text-white text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-gray-800">
  <span className="relative z-10">Button Text</span>
  <motion.div
    className="absolute inset-0 bg-white/10"
    initial={{ x: '-100%' }}
    whileHover={{ x: '100%' }}
    transition={{ duration: 0.5 }}
  />
</button>
```

---

## Special Effects

### Clip-Path (New Arrivals)
```jsx
<img
  style={{
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
  }}
/>
```

### Golden Decorative Line
```jsx
<div className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-700" />
```

### Badge
```jsx
<span className="px-3 py-1 bg-gray-900 text-white text-xs uppercase tracking-wider font-light">
  New
</span>
```

---

## Do's and Don'ts

### ✅ DO:
- Use actual product images
- Keep animations subtle and purposeful
- Maintain consistent spacing and typography
- Use the same hover overlay pattern across components
- Stick to gray scale with gold accents only
- Use serif fonts for headings
- Keep interactions smooth and professional
- Alternate section backgrounds (white/gray-50)

### ❌ DON'T:
- Add random gradients or background colors
- Use generic icons in cards
- Create excessive or flashy animations
- Mix different animation patterns randomly
- Use bright colors or multiple color schemes
- Overcomplicate layouts
- Add unnecessary decorative elements
- Use hover effects beyond scale and overlay patterns

---

## Section Background Pattern
Alternate between white and gray-50 for visual rhythm:
1. Hero - `bg-baige` (custom)
2. Featured Collections - `bg-gray-50`
3. New Arrivals - `bg-white`
4. Best Selling - `bg-gray-50`

---

## Responsive Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

### Common Responsive Patterns
```jsx
// Typography
className="text-4xl md:text-5xl"

// Grid
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Visibility
className="hidden md:block"
```

---

## Image Requirements
- High-quality product photography
- Proper aspect ratios maintained
- Use `object-cover` for cropping
- Always include inset shadow overlay
- Use existing images from `/public/Stock/` or `/public/rings/`

---

## File Structure
```
src/
  components/
    Hero.jsx
    FeaturedCollections.jsx
    NewArrivals.jsx
    BestSelling.jsx
  pages/
    Home.jsx
public/
  Stock/
    image1.png
    image2.png
    image3.png
    image4.png
  rings/
    [various ring images]
```

---

## Summary
This design system prioritizes **minimalism, consistency, and sophistication**. Every component should feel cohesive with the existing sections. When in doubt, reference the Hero, BestSelling, FeaturedCollections, and NewArrivals components for patterns to follow.
