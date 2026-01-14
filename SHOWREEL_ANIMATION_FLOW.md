# Showreel Animation Flow - Bidirectional

## How It Works Now ✓

### Animation Curve: Parabolic (Inverted U-shape)
```
Video Size
    ↑
1.5x|        ___        ← Peak (Full-screen at scroll position 0.5)
    |       /   \
1.3x|      /     \
    |     /       \
1.1x|    /         \
    |   /           \
1.0x|__/             \__  ← Start & End (Normal size)
    |__________________|→ Scroll Progress
    0   0.25  0.5  0.75  1.0
```

### User Experience Flow:

**Phase 1: Growing (rawProgress 0 → 0.5)**
- User scrolls down past Solution 1
- Video **gradually scales up** from 1.0x to 1.5x
- "SHOWREEL" text fades and shrinks
- Video z-index: `1` (behind regular content)

**Phase 2: Full-Screen Peak (rawProgress = 0.5)**
- Video reaches **maximum size** (full viewport)
- Position becomes `fixed` for dramatic effect
- Width: 100vw, Height: 100vh
- Border radius: 0 (seamless full-screen)
- Video z-index: `10` (in front temporarily)

**Phase 3: Shrinking (rawProgress 0.5 → 1.0)**
- User continues scrolling down
- Video **gradually shrinks back** from 1.5x to 1.0x
- Returns to `relative` positioning
- Video z-index: `1` (no longer blocking)

**Phase 4: Completed (rawProgress > 1.0)**
- Video returns to **default state** (scale(1))
- Position: `relative` (stays in its section)
- z-index: `1` (won't block any content)
- **User can scroll past freely** to other sections ✓

## Key Improvements:

### ✅ Fixed Issues:
1. **No More Sticky Video**: Video doesn't stay stuck in full-screen
2. **Proper Z-Index**: 
   - During animation: `z-1` (behind content)
   - At full-screen peak: `z-10` (visible)
   - After animation: `z-1` (won't block)
3. **Bidirectional Flow**: Grows → Peaks → Shrinks → Returns
4. **Scrollable Content**: Users can continue to sections below

### Scroll Timeline:

```
┌─────────────────────────────────────────┐
│   USER SCROLLS DOWN                     │
├─────────────────────────────────────────┤
│ Solution 1 Section                      │
│ ↓ (user scrolls)                        │
├─────────────────────────────────────────┤
│ SHOWREEL Section Starts                 │
│ Video: Small (1.0x scale)               │
│ ↓ scroll                                │
│ Video: Growing (1.2x)                   │
│ ↓ scroll                                │
│ Video: Bigger (1.4x)                    │
│ ↓ scroll                                │
│ Video: FULL-SCREEN (100vw×100vh) ← PEAK │
│ ↓ continue scrolling                    │
│ Video: Shrinking (1.4x)                 │
│ ↓ scroll                                │
│ Video: Smaller (1.2x)                   │
│ ↓ scroll                                │
│ Video: Normal (1.0x) - Animation Done   │
├─────────────────────────────────────────┤
│ Solution 2 Section (Visible! ✓)        │
│ Solution 3 Section (Accessible! ✓)     │
│ Other Sections Below (No blocking! ✓)  │
└─────────────────────────────────────────┘
```

## Technical Details:

### Parabolic Formula:
```javascript
y = -4(x - 0.5)² + 1
```

Where:
- `x` = `rawProgress` (0 to 1)
- `y` = `animationProgress` (0 to 1)
- Peak at x = 0.5 → y = 1

### Three Animation States:

**1. Full-Screen State** (`animationProgress > 0.8`)
```javascript
position: fixed
z-index: 10  // Only when nearly/at full-screen
width: 70vw → 100vw (smooth transition)
height: 45vh → 100vh (smooth transition)
```

**2. Growing/Shrinking State** (`0.05 < animationProgress ≤ 0.8`)
```javascript
position: relative
z-index: 1  // Behind normal content
transform: scale(1.0 → 1.5)  // Smooth scaling
```

**3. Default State** (`animationProgress ≤ 0.05`)
```javascript
position: relative
z-index: 1  // Won't block anything
transform: scale(1)  // Normal size
```

## Benefits:

✅ **Smooth UX**: Video grows and shrinks naturally
✅ **No Blocking**: Z-index only high during full-screen moment  
✅ **Natural Flow**: Users can continue scrolling without obstruction
✅ **Apple-Style**: Premium feel like modern product showcases
✅ **Performant**: Uses GPU-accelerated transforms and fixed positioning

---

**Status**: ✅ Fully Implemented & Working
**Last Updated**: January 14, 2026 05:54 AM
