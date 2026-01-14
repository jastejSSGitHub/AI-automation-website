# Showreel Section - Simplified Implementation

## Overview
Simple, clean showreel video section that auto-plays when scrolled into view.

## ✅ Current Implementation

### 1. HTML Structure
```html
<div id="showreel-section" class="relative w-full min-h-screen flex flex-col items-center justify-start pt-20 md:pt-32">
  <!-- SHOWREEL Text -->
  <div id="showreel-text" class="text-center mb-8 md:mb-12">
    <h2 class="text-[80px] md:text-[120px] lg:text-[180px] font-black tracking-tighter text-slate-900 leading-none font-sf" 
        style="opacity: 0.15;">
      SHOWREEL
    </h2>
  </div>

  <!-- Video Player Container -->
  <div id="showreel-video-container" class="w-full max-w-5xl px-6">
    <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style="aspect-ratio: 16/9;">
      <video 
        id="showreel-video" 
        class="w-full h-full object-cover"
        controls
        preload="metadata"
        poster=""
      >
        <source src="./videos/showreel.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>
```

### 2. JavaScript - Auto-Play on Scroll
```javascript
// Showreel Auto-Play on Scroll Into View
document.addEventListener('DOMContentLoaded', () => {
  const showreelVideo = document.getElementById('showreel-video');
  const showreelSection = document.getElementById('showreel-section');

  if (!showreelVideo || !showreelSection) return;

  // Use Intersection Observer to detect when section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section is visible - play video
        showreelVideo.play().catch(err => {
          // Auto-play might be blocked by browser, that's okay
          console.log('Auto-play prevented:', err);
        });
      } else {
        // Section is not visible - pause video
        showreelVideo.pause();
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of section is visible
  });

  observer.observe(showreelSection);
});
```

## How It Works

### User Experience:
1. **User scrolls down** past Solution 1
2. **Showreel section comes into view** (50% visible)
3. **Video automatically plays** ✓
4. User can:
   - Play/pause using native controls
   - Seek through the video
   - Enable fullscreen
5. **User scrolls away** → Video pauses automatically
6. **User scrolls back** → Video resumes playing

### Intersection Observer:
- **Threshold: 0.5** = Triggers when 50% of section is in viewport
- **Plays on intersecting** = Auto-plays when visible
- **Pauses when not intersecting** = Pauses when scrolled away
- **Error handling** = Catches browser auto-play restrictions

## Features

✅ **Simple & Clean**: No complex animations  
✅ **Auto-Play**: Plays automatically when scrolled into view  
✅ **Auto-Pause**: Pauses when user scrolls away  
✅ **Native Controls**: Full user control (play, pause, seek, fullscreen)  
✅ **Responsive**: Works on all screen sizes  
✅ **Browser-Friendly**: Handles auto-play restrictions gracefully  
✅ **Performance**: No requestAnimationFrame loops  

## Browser Auto-Play Notes

Some browsers block auto-play with sound. The implementation handles this:
- Video will try to auto-play
- If blocked, user can click play button
- Error is logged (doesn't break the page)
- User retains full control via native controls

## Video Specifications

### File Location
- **Path**: `/website/videos/showreel.mp4`
- **Status**: ⚠️ **Placeholder** - Add your video file

### Recommended Specs
- **Format**: MP4 (H.264 codec)
- **Aspect Ratio**: 16:9
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 30 seconds to 2 minutes
- **File Size**: Under 50MB

## Removed Features

The following complex features have been removed for simplicity:
- ❌ Scroll-driven scaling animations
- ❌ Full-screen transitions on scroll
- ❌ Parabolic animation curves
- ❌ Text fade/scale effects
- ❌ Dynamic z-index changes
- ❌ RequestAnimationFrame loops

## Benefits of This Approach

1. **Simpler Code**: ~30 lines vs ~100 lines
2. **Better Performance**: No continuous animation loops
3. **More Reliable**: Fewer edge cases and bugs
4. **User-Friendly**: Standard video behavior everyone understands
5. **Easier to Maintain**: Less complex logic
6. **SEO-Friendly**: Standard HTML5 video element

---

**Implementation Date**: January 14, 2026
**Status**: ✅ Complete & Simplified
**Next Step**: Add your `showreel.mp4` video file
