# Design Specifications - AI Automation Agency Website

## 🎨 Visual Design System

### **Color Palette**

#### Primary Colors
- **Electric Blue:** `#007AFF` - Primary CTA, links, accents
- **Near Black:** `#1D1D1F` - Headlines, primary text
- **White:** `#FFFFFF` - Backgrounds, card backgrounds

#### Secondary Colors
- **Teal:** `#06B6D4` - Secondary accents, icons
- **Purple:** `#8B5CF6` - Tertiary accents, gradients
- **Coral:** `#FF6B6B` - Highlights, stats
- **Orange:** `#F59E0B` - Additional accent

#### Grays
- **Dark Gray:** `#6E6E73` - Body text, secondary text
- **Medium Gray:** `#64748B` - Tertiary text, labels
- **Light Gray:** `#94A3B8` - Disabled text, subtle text
- **Very Light Gray:** `#F3F4F6` - Inactive backgrounds
- **Border Gray:** `#E5E7EB` - Borders, dividers
- **Dark Background:** `#0F172A` - Footer background
- **Dark Divider:** `#1E293B` - Footer dividers

#### Background Gradients
- **Light Blue Gradient:** `#F0F9FF` to `#FFFFFF`
- **Light Purple Gradient:** `#F5F3FF` to `#FFFFFF`
- **Light Gray Gradient:** `#F8F9FA` to `#FFFFFF`
- **Dramatic Gradient:** `#1E3A8A` → `#7C3AED` → `#FF6B6B` (135deg diagonal)

#### Glassmorphism
- **Background:** `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.12)`
- **Backdrop Filter:** `blur(12px)` to `blur(20px)`, `saturate(180%)`
- **Border:** `1px solid rgba(255, 255, 255, 0.18)` to `0.25`
- **Shadow:** `0 8px 32px rgba(0, 0, 0, 0.12)`

---

### **Typography**

#### Font Families
- **Primary:** Inter or SF Pro Display (Headlines)
- **Secondary:** Inter or SF Pro Text (Body)
- **Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

#### Font Sizes
- **Hero Headline:** 64px (mobile: 40px)
- **Section Headline:** 56px (mobile: 36px)
- **Large Headline:** 48px (mobile: 32px)
- **Card Headline:** 28px (mobile: 24px)
- **Card Title:** 22-24px (mobile: 20px)
- **Subheadline:** 18-20px (mobile: 16-18px)
- **Body Text:** 16px (mobile: 14px)
- **Small Text:** 14px (mobile: 12px)
- **Tiny Text:** 12px (mobile: 11px)
- **Micro Text:** 10px

#### Font Weights
- **Bold:** 700 (Headlines, titles)
- **Semi-Bold:** 600 (Buttons, emphasis)
- **Medium:** 500 (Subheadings, labels)
- **Regular:** 400 (Body text)

#### Line Heights
- **Headlines:** 1.1 to 1.2
- **Subheadlines:** 1.4 to 1.5
- **Body Text:** 1.6 to 1.8
- **Links:** 2.0 (for spacing in lists)

#### Letter Spacing
- **Headlines:** -0.5px to -1px (tight, modern)
- **Uppercase Labels:** 0.5px to 1px (tracking)
- **Body Text:** Normal (0px)

---

### **Spacing System**

#### Section Padding
- **Large Sections:** 120-140px top/bottom (mobile: 60-80px)
- **Medium Sections:** 100px top/bottom (mobile: 60px)
- **Small Sections:** 80px top/bottom (mobile: 40px)

#### Component Spacing
- **Card Padding (Large):** 48px (mobile: 32px)
- **Card Padding (Medium):** 40px (mobile: 28px)
- **Card Padding (Small):** 32-36px (mobile: 24px)
- **Card Gap:** 24-40px (mobile: 16-24px)
- **Element Gap:** 16-24px (mobile: 12-16px)
- **Tight Gap:** 8-12px (mobile: 8px)

#### Container Widths
- **Max Content Width:** 1400px
- **Standard Content:** 1200px
- **Narrow Content:** 800px
- **Text Content:** 700px
- **Compact Content:** 600px

---

### **Border Radius**

- **Large Cards:** 20-24px
- **Medium Cards:** 16-18px
- **Small Cards:** 12-14px
- **Buttons:** 10-12px
- **Pills/Badges:** 12-20px (fully rounded)
- **Input Fields:** 8-10px
- **Icons:** 8px

---

### **Shadows**

#### Card Shadows
- **Subtle:** `0 4px 12px rgba(0, 0, 0, 0.08)`
- **Medium:** `0 4px 16px rgba(0, 0, 0, 0.08)`
- **Strong:** `0 8px 24px rgba(0, 0, 0, 0.1)`
- **Dramatic:** `0 20px 60px rgba(0, 0, 0, 0.3)`

#### Text Shadows
- **Subtle:** `0 2px 8px rgba(0, 0, 0, 0.2)`

#### Hover Shadows
- **Lift Effect:** `0 12px 32px rgba(0, 0, 0, 0.12)`
- **Intense Lift:** `0 16px 48px rgba(0, 0, 0, 0.15)`

---

### **Icons**

#### Sizes
- **Extra Large:** 64px (solution cards, features)
- **Large:** 48px (stats, testimonials)
- **Medium:** 24-32px (checkmarks, badges)
- **Small:** 16-20px (inline icons, arrows)

#### Style
- **Type:** Line icons or emoji (🚀 ⚡ 💬 🎯)
- **Color:** Match accent colors or inherit from context
- **Stroke Width:** 2px for line icons

---

## 🎬 Animation Specifications

### **Easing Functions**

```css
/* Dramatic entrances, reveals */
easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1)

/* Smooth transitions, page changes */
easeInOutCubic: cubic-bezier(0.65, 0, 0.35, 1)

/* Hover effects, small movements */
easeOutCubic: cubic-bezier(0.33, 1, 0.68, 1)

/* Quick responses */
easeOut: cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### **Spring Physics**
```javascript
// Magnetic effects, follows
{ stiffness: 200, damping: 20 }

// Button interactions
{ stiffness: 150, damping: 15 }

// Smooth movements
{ stiffness: 100, damping: 10 }
```

### **Duration Guidelines**

- **Micro-interactions:** 150-300ms (hover, button clicks)
- **Small movements:** 300-600ms (card reveals, icon animations)
- **Medium transitions:** 600-1000ms (section reveals, accordion)
- **Large movements:** 1000-1500ms (page transitions, scroll animations)
- **Ambient animations:** 2000-30000ms (background gradients, floating elements)

### **Stagger Timing**

- **Tight stagger:** 50-80ms (characters, small elements)
- **Medium stagger:** 100-150ms (cards, list items)
- **Loose stagger:** 200-300ms (large sections, columns)

---

## 🖱️ Interactive States

### **Buttons**

#### Primary Button (Electric Blue)
- **Default:** Blue background, white text, subtle shadow
- **Hover:** Lift 4px, scale 1.05, glow expands, magnetic effect
- **Active/Click:** Scale 0.98, ripple effect
- **Disabled:** 50% opacity, no hover effects

#### Secondary Button (Outline)
- **Default:** Transparent background, blue border, blue text
- **Hover:** Border morphs, background fills, text inverts
- **Active/Click:** Scale 0.98
- **Disabled:** 50% opacity, no hover effects

### **Cards**

- **Default:** White background, subtle shadow
- **Hover:** Lift 4-12px (varies by card type), shadow deepens, border glows
- **3D Tilt (Advanced):** Card tilts toward cursor (max 8deg)
- **Magnetic (Advanced):** Card follows cursor within radius

### **Links**

- **Default:** Inherit color or blue
- **Hover:** Underline draws from left to right, color shifts to electric blue
- **Active:** Underline persists, slight glow

### **Accordion/FAQ**

- **Collapsed:** White background, gray border, plus icon
- **Hover (Collapsed):** Border glows blue, lift 2px
- **Expanded:** Blue border, light blue background, plus rotates to X
- **Transition:** 400ms easeInOutCubic

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* Single column layouts */
  /* Reduced font sizes */
  /* Stacked navigation */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* 2-column grids */
  /* Medium font sizes */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Full multi-column layouts */
  /* Full font sizes */
  /* Horizontal scroll effects */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Max content width constraints */
}
```

---

## ♿ Accessibility

### **Color Contrast**
- **Text on White:** Minimum 4.5:1 ratio (WCAG AA)
- **Large Text:** Minimum 3:1 ratio
- **Interactive Elements:** Clear focus states

### **Focus States**
- **Outline:** 2px solid electric blue, 2px offset
- **Visible on all interactive elements**
- **Never remove without alternative**

### **Motion**
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable complex animations */
  /* Keep functional animations only */
  /* Use instant transitions */
}
```

### **Screen Readers**
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels where needed
- Alt text for all images
- Skip to content link

---

## 🎯 Component Specifications

### **Glassmorphism Cards**

```css
.glassmorphism-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}
```

### **Gradient Text**

```css
.gradient-text {
  background: linear-gradient(135deg, #007AFF, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### **Bento Grid**

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.bento-large {
  grid-column: span 2;
  grid-row: span 1;
}

.bento-medium {
  grid-column: span 1;
  grid-row: span 1;
}
```

### **Pills/Badges**

```css
.pill {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(0, 122, 255, 0.1);
  color: #007AFF;
}
```

---

## 🌟 Special Effects

### **Grain Texture**
- **Opacity:** 3%
- **Type:** SVG noise filter or PNG overlay
- **Animation:** Subtle position shift (optional)

### **Parallax Layers**
- **Background:** 0.2x scroll speed
- **Mid-ground:** 0.4-0.6x scroll speed
- **Foreground:** 1x scroll speed (normal)
- **Floating elements:** 1.2x scroll speed (faster)

### **Floating Orbs**
- **Size:** 200-600px
- **Blur:** 60-100px
- **Opacity:** 5-15%
- **Animation:** Slow float (30-50s loops, different speeds)
- **Colors:** Match section accent colors

### **Gradient Animation**
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient {
  background: linear-gradient(135deg, #1E3A8A, #7C3AED, #FF6B6B);
  background-size: 200% 200%;
  animation: gradient-shift 20s ease infinite;
}
```

---

## 📐 Layout Patterns

### **Section Structure**
```
<section class="section-wrapper">
  <div class="section-container">
    <h2 class="section-headline">Headline</h2>
    <p class="section-subheadline">Subheadline</p>
    <div class="section-content">
      <!-- Cards, grids, content -->
    </div>
  </div>
</section>
```

### **Card Structure**
```
<div class="card">
  <div class="card-icon">Icon</div>
  <h3 class="card-title">Title</h3>
  <p class="card-description">Description</p>
  <div class="card-pills">
    <span class="pill">Pill 1</span>
    <span class="pill">Pill 2</span>
  </div>
  <div class="card-badge">Badge</div>
</div>
```

---

## 🚀 Performance Optimization

### **Animation Performance**
- Use `transform` and `opacity` only (GPU-accelerated)
- Add `will-change: transform` to animated elements
- Remove `will-change` after animation completes
- Target 60fps for all animations

### **Image Optimization**
- WebP format with JPEG fallback
- Lazy load images below fold
- Responsive images with srcset
- Compress to 80-85% quality

### **Code Splitting**
- Lazy load sections below fold
- Defer non-critical JavaScript
- Critical CSS inline
- Async load fonts

---

*Last Updated: December 25, 2024*
