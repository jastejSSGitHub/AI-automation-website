# Aura Build Enhancement Prompts
## Upgrade Existing Sections with Awwwards-Level Interactions

> **Purpose:** These prompts enhance the already-created base sections with advanced animations, interactions, and visual effects.

---

## 🎨 ENHANCEMENT PROMPT #1: Hero Section Upgrade

```
Enhance the existing hero section with advanced Framer Motion animations and interactive effects:

HEADLINE ENHANCEMENT:
- Add split-text animation: Each word should animate in separately
- Animation: Fade up from 60px below, blur clears (20px → 0), duration 0.8s per word
- Stagger delay: 0.1s between words
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

FLOATING UI CARDS ENHANCEMENT:
- Add entrance animations:
  - "AI Automation" card: Slide from left (x: -100px → 0), rotate from -5deg to 0deg, duration 1.2s, delay 1s
  - "MVP Ready" card: Slide from right (x: 100px → 0), rotate from 5deg to 0deg, duration 1.2s, delay 0.8s
- Add hover effects:
  - Lift 8px on hover
  - Add 3D tilt effect that follows cursor position
  - Border should glow and pulse
  - Shadow should deepen
  - Smooth spring animation (stiffness: 150, damping: 15)

CTA BUTTONS ENHANCEMENT:
- Primary button: Add magnetic hover effect (button follows cursor within 40px radius)
- Primary button: Add scale to 1.05 on hover with expanding glow
- Primary button: Add ripple effect on click
- Secondary button: Add border morph animation on hover (border draws around perimeter)
- Secondary button: Background should fill from left to right on hover

BACKGROUND ENHANCEMENT:
- Add 3-5 floating orbs (200-600px size, heavily blurred 60-100px)
- Orbs should float slowly (30-50s loops, different speeds and directions)
- Add parallax effect: Orbs move at 0.2x scroll speed
- Add subtle grain texture overlay (3% opacity)
- Make gradient animate slowly (20s color morph loop)

SCROLL INDICATOR:
- Add animated scroll indicator at bottom (bouncing arrow or mouse icon)
- Should fade out as user scrolls down (0-20% scroll progress)

PERFORMANCE:
- Ensure all animations use transform and opacity only (GPU-accelerated)
- Target 60fps for all animations
```

---

## 💡 ENHANCEMENT PROMPT #2: Problem Section Upgrade

```
Enhance the existing Problem section with scroll-triggered animations and 3D hover effects:

SCROLL-TRIGGERED ENTRANCE:
- Cards should be invisible until section is 20% visible in viewport
- Add staggered reveal: Cards appear one by one with 0.15s delay between them
- Each card entrance: Fade in (opacity 0 → 1), slide up (y: 80px → 0), scale (0.92 → 1), blur clears (10px → 0)
- Duration: 0.9s per card
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

CARD HOVER - 3D TILT:
- Add 3D tilt effect: Card should tilt toward cursor position (max 8 degrees)
- Inner elements (icon, text) should have subtle parallax movement
- Shadow should follow tilt direction
- Add animated gradient border that appears and rotates on hover
- Icon should scale to 1.1x and rotate 5deg
- Title text color should shift from black to electric blue (#007AFF)
- Smooth transitions (0.3s duration)

LAYOUT ENHANCEMENT:
- Adjust vertical positions for visual rhythm:
  - Card 1: Move 20px higher than baseline
  - Card 2: Keep at baseline
  - Card 3: Move 20px lower than baseline
- This creates asymmetric, dynamic layout instead of flat grid

HEADLINE ENHANCEMENT:
- Add split-text reveal: Words slide up from below with blur clearing
- Stagger: 0.08s per word
- Total duration: 1.2s
```

---

## ⚡ ENHANCEMENT PROMPT #3: Solutions Section Upgrade

```
Enhance the existing Solutions bento grid with magnetic hover effects and cascading animations:

CARD ENTRANCE - CASCADE:
- Cards should appear in reading order (left-to-right, top-to-bottom)
- Each card initial state: opacity 0, scale 0.88, y: 60px, blur 15px, rotate -2deg
- Animate to: opacity 1, scale 1, y: 0, blur 0, rotate 0deg
- Duration: 0.8s per card
- Stagger: 0.15s between cards
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

MAGNETIC HOVER EFFECT:
- Card should follow cursor position within 60px radius
- Use smooth spring animation (stiffness: 200, damping: 20)
- Lift card 12px on hover
- Shadow should expand dramatically
- Border should glow with animated gradient

INNER CONTENT PARALLAX:
- Icon should shift opposite to cursor direction (creates depth)
- Pills should float up 4px sequentially (stagger: 0.05s each)
- Timeline badge should pulse gently

ICON ANIMATIONS:
- On card appear: Icon bounces in (scale 0 → 1.2 → 1), rotates from -180deg to 0deg
- Duration: 0.6s, delay 0.3s after card appears
- On hover: Icon rotates 360deg slowly (2s), adds subtle scale pulse (1 → 1.1 → 1, infinite loop)
- Add glow effect behind icon

PILLS ENHANCEMENT:
- Pills should slide in from left (x: -20px → 0) after card appears
- Stagger: 0.08s per pill
- On card hover: Pills float up, scale to 1.05, background color intensifies

BACKGROUND EFFECTS:
- Add subtle grid lines in background with parallax (0.3x scroll speed)
- Add large gradient orbs behind cards (slow 40s movement loop, 8% opacity)
```

---

## 🎯 ENHANCEMENT PROMPT #4: Why Choose Us Section Upgrade

```
Enhance the existing Why Choose Us section with diagonal wave reveal and scroll-linked effects:

HEADLINE SCROLL-LINKED:
- Headline should scale from 0.8 to 1.0 as section scrolls into view
- Opacity should increase from 0.3 to 1.0
- Link animation to scroll progress (0-100% of section visibility)

DIAGONAL WAVE REVEAL:
- Change card entrance pattern to diagonal wave (top-left to bottom-right)
- Timing:
  - Row 1: Card 1 (0s), Card 2 (0.1s), Card 3 (0.2s)
  - Row 2: Card 4 (0.1s), Card 5 (0.2s), Card 6 (0.3s)
- Each card: Fade in, slide from left (-40px) and top (40px), blur clears
- Duration: 0.7s per card

CHECKMARK ANIMATION:
- Checkmark should draw in using SVG stroke animation (path length 0 → 1)
- Duration: 0.5s, delay 0.3s after card appears
- On hover: Checkmark scales to 1.2x, rotates 360deg, color pulses

CARD HOVER ENHANCEMENT:
- Lift 6px
- Title should get animated underline that draws from left to right
- Title color shifts to electric blue
- Letter-spacing increases slightly (+0.5px)
- Background shifts to subtle gradient
- Duration: 0.3s

BACKGROUND EFFECTS:
- Add dot grid pattern (2px circles, 40px spacing, 4% opacity)
- Dots should have parallax scroll (0.4x speed)
- Dots near hovered card should pulse gently
```

---

## 🔄 ENHANCEMENT PROMPT #5: Process Section Upgrade

```
Enhance the existing Process section with horizontal scroll interaction (desktop only):

HORIZONTAL SCROLL SETUP (Desktop):
- Convert to horizontal scrolling: User scrolls down (vertical), content moves left (horizontal)
- Sticky container with horizontal transform
- Total scroll distance: 3x viewport height
- Each step takes 80vw width

NUMBER BADGE ENHANCEMENT:
- Increase size to 200px diameter
- Add gradient background with continuous rotation animation
- Add 3D perspective transform
- Entrance animation: Scale from 0 → 1.2 → 1 (bounce effect)
- Rotate from -180deg to 0deg
- Duration: 0.8s

CONTENT REVEAL SEQUENCE:
As each step scrolls into center viewport:
1. Number badge animates in (0s)
2. Title fades up (0.2s delay)
3. Description fades up (0.4s delay)
4. Duration badge slides from right (0.6s delay)

TITLE ANIMATION:
- Split title into individual characters
- Each character: opacity 0 → 1, y: 20px → 0
- Stagger: 0.02s per character (creates typewriter effect)

PROGRESS INDICATOR:
- Add horizontal progress line at bottom
- Add 4 dots representing 4 steps
- Active dot: Large, filled, glowing
- Inactive dots: Small, outline only
- Smooth transitions between states

CONNECTION LINE:
- Add dotted line connecting number badges
- Line should draw in as user scrolls (stroke-dasharray animation)
- Use gradient color matching step colors
- Add parallax effect (moves slower than content)

MOBILE ADAPTATION:
- On mobile, revert to normal vertical scroll
- Steps stack normally
- Reduce number badge size to 100px
- Add swipe gesture hints
```

---

## 🏆 ENHANCEMENT PROMPT #6: Case Studies Section Upgrade

```
Enhance the existing Case Studies bento grid with scroll-triggered reveals and count-up animations:

SCROLL-TRIGGERED SEQUENCE:
- Phase 1 (0-20% scroll): Headline scales from 0.9 to 1, opacity 0 to 1, blur clears (10px → 0)
- Phase 2 (20-60% scroll): Cards appear with stagger (0.12s between cards)
- Phase 3 (60-100% scroll): Trust bar stats count up from 0

LARGE TESTIMONIAL CARD:
- Quote entrance: Quotation mark appears first (scale + rotate), then text reveals word by word (0.05s stagger)
- Metrics section: Cards slide in from right with stagger (0.1s)
- Numbers: Add count-up animation from 0 to final value (1.5s duration)
- Hover: Entire card lifts 8px, metrics shift with parallax, quote gets subtle glow

STAT CARDS (Small):
- Number count-up: Animate from 0 to final number when card scrolls into view
- Duration: 1.5s, easing: easeOutQuad
- Add circular progress ring that animates around number
- Icon should scale with count (pulse effect)
- Hover: Card rotates slightly (3D tilt), number scales 1.2x, background gradient shifts

MINI-TESTIMONIAL CAROUSEL:
- Add auto-rotate every 5 seconds
- Smooth slide transition between testimonials
- Infinite loop
- Pause on hover
- Star rating: Stars should fill from left to right (0.2s per star, bounce effect)

TRUST BADGES BAR:
- Bar slides up from bottom
- Stats count up simultaneously
- Icons pop in with bounce effect
- Stagger: 0.1s between elements
- Hover on individual stat: Scale 1.1x, color shifts to blue, glow appears

BACKGROUND EFFECTS:
- Add animated gradient mesh (30s color morph loop)
- Add parallax scroll (0.3x speed)
- Add floating abstract shapes (slow rotation, 5-10% opacity)
```

---

## ❓ ENHANCEMENT PROMPT #7: FAQ Section Upgrade

```
Enhance the existing FAQ section with sticky navigation and smooth accordion animations:

CATEGORY NAVIGATION (Desktop):
- Make left column sticky (stays in place while scrolling)
- Add scrollspy: Active category highlights based on scroll position
- Add vertical indicator line that slides to active category (smooth spring animation)
- Click behavior: Smooth scroll to category (1s duration, easeInOutCubic easing)
- Active pill: Scale 1.05, add glow effect

ACCORDION ANIMATIONS:
- Expand animation:
  - Height transitions smoothly to auto
  - Content fades in and slides down
  - Icon rotates 45deg (plus becomes X)
  - Border color changes from gray to electric blue
  - Background changes from white to light blue (#F0F9FF)
  - Duration: 0.4s, easing: easeInOutCubic
- Collapse animation:
  - Reverse of expand
  - Duration: 0.3s (faster than expand)

ICON ENHANCEMENT:
- Plus icon made of two lines (horizontal + vertical)
- On expand: Rotate 45deg, vertical line fades out (becomes X)
- Color shifts from gray to electric blue
- Duration: 0.3s

CARD HOVER (Collapsed State):
- Border glows electric blue
- Lift 2px
- Add magnetic effect: Border glow follows cursor position
- Glow intensifies near cursor
- Smooth spring animation

ANSWER REVEAL:
- Answer text appears line by line
- Each line: Fade in + slide up
- Stagger: 0.05s per line
- Creates natural reading rhythm

CTA CARD "Still Have Questions?":
- Gradient background (blue → purple) that rotates continuously
- Slides up from bottom when scrolled into view
- Button pulses gently (scale 1 → 1.02 → 1, 2s loop)
- Hover: Gradient rotation speeds up, button lifts and glows

BACKGROUND EFFECTS:
- Add large "?" symbols in background (2% opacity)
- Parallax scroll (0.5x speed)
- Slow rotation animation
```

---

## 🎯 ENHANCEMENT PROMPT #8: Final CTA Section Upgrade

```
Enhance the existing Final CTA section with dramatic full-screen effects and advanced animations:

GRADIENT BACKGROUND:
- Enhance gradient to animated mesh: Deep blue → Purple → Coral → Orange → Pink
- Add slow color morph animation (20s loop)
- Diagonal direction (135deg)

PARALLAX LAYERS:
- Add multi-layer parallax:
  - Base gradient: 0.2x scroll speed
  - Large orbs: 0.4x scroll speed
  - Content: 1x scroll speed (normal)

FLOATING ORBS:
- Add 5-7 large orbs (blur 60-100px)
- Float animation: y: -20px to 20px (8s loop, different speeds)
- Rotate slowly: 360deg (30s loop)
- Opacity pulse: 0.1 to 0.2 (4s loop)

HEADLINE ENHANCEMENT:
- Entrance: Start huge (scale 1.5, blur 30px), scale down to normal (scale 1, blur 0)
- Opacity: 0 → 1
- Duration: 1.5s, easing: easeOutExpo
- Add gradient fill on text with animated shimmer effect

CALENDLY CARD:
- Entrance: Slide up (y: 100px → 0), fade in, scale (0.95 → 1), blur clears (20px → 0)
- Duration: 1s, delay: 0.6s
- Enhance glassmorphism: rgba(255,255,255,0.12), backdrop-filter blur(20px)
- Hover: Lift 8px, shadow expands, border glows with animated gradient, scale 1.02

PRIMARY BUTTON:
- Add gradient background with continuous animation
- Add subtle pulse (scale 1 → 1.02 → 1, 2s loop)
- Hover: Magnetic effect (follows cursor within 50px), scale 1.05, glow expands
- Click: Ripple effect from click point, scale 1.05 → 0.98 → 1.05

TRUST BADGES:
- Entrance: Slide up from bottom with stagger (0.08s per badge)
- Delay: 1s after section appears
- Hover: Scale 1.05, glow appears, icon animates (checkmark draws, clock ticks)

SECONDARY BUTTONS:
- Hover: Border morphs (stroke-dasharray animation draws border)
- Background fills from center (radial fill)
- Text color inverts
- Duration: 0.4s

URGENCY BADGE:
- Add pulse animation (scale 1 → 1.03 → 1, 2s loop)
- Glow pulses with scale
- Clock icon ticks
- Entrance: Slide from bottom with bounce, delay 1.4s

FLOATING SHAPES:
- Add 5-7 abstract shapes scattered around
- Slow float (different speeds for each)
- Opacity: 8-15%
- Parallax effect on scroll
```

---

## 📄 ENHANCEMENT PROMPT #9: Footer Upgrade

```
Enhance the existing footer with staggered reveals and elegant micro-interactions:

ENTRANCE ANIMATION:
- Footer should slide up from bottom as user scrolls
- Trigger: When 80% of Final CTA section is scrolled
- Duration: 1s, smooth easing

COLUMN REVEALS:
- Staggered left to right (0.15s delay between columns)
- Each column: Fade in + slide up
- Duration: 0.7s per column

BRAND COLUMN:
- Logo: Scale from 0 to 1 with bounce effect
- Tagline: Fade + slide up (0.2s delay)
- Description: Fade + slide up (0.4s delay)
- Social icons: Pop in one by one (0.1s stagger)

LINK HOVER EFFECTS:
- Underline should draw from left to right
- Color shifts from gray to electric blue
- Link indents right by 4px
- Arrow icon appears and slides in
- Duration: 0.3s, smooth easing

SOCIAL ICONS HOVER:
- Lift 4px
- Rotate 360deg
- Color shifts to electric blue
- Background circle appears
- Scale: 1 → 1.2
- Duration: 0.4s

CTA BUTTON:
- Gradient background animates continuously
- Hover: Lift 4px, glow expands, arrow icon slides right
- Click: Ripple effect

DIVIDER LINE:
- Should draw from left to right
- Use gradient color (blue → purple)
- Duration: 1.2s
- Delay: 0.8s after footer appears

BOTTOM BAR:
- Fades in after divider completes
- Slight slide up
- Duration: 0.5s

BACKGROUND EFFECTS:
- Add subtle dot grid pattern (3% opacity)
- Parallax scroll (0.5x speed)
- Radial gradient overlay from top (5% opacity)
```

---

*End of Enhancement Prompts*
