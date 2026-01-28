# Showreel Video Directory

## Purpose
This directory contains the showreel video that displays in the scroll-driven video section on the homepage.

## Required File
- **Filename**: `showreel.mp4`
- **Location**: Place your video file here as `showreel.mp4`

## Video Specifications
For best results, your showreel video should meet these specifications:

### Recommended Settings
- **Format**: MP4 (H.264 codec)
- **Aspect Ratio**: 16:9
- **Resolution**: 1920x1080 (Full HD) or higher
- **Frame Rate**: 30fps or 60fps
- **File Size**: Under 50MB for web optimization (compress if needed)
- **Duration**: 30 seconds to 2 minutes

### Quality Guidelines
- Use high-quality footage that represents your best work
- Ensure good color grading and consistent aesthetics
- Include smooth transitions between clips
- Consider adding subtle motion graphics or text overlays
- Export with a high bitrate for web (8-12 Mbps recommended)

## How the Video is Used
The video appears in the Solutions section (after Solution 1: "Production-Ready"). As users scroll:
1. The large "SHOWREEL" text fades and shrinks
2. The video player gradually expands
3. Eventually the video fills the entire viewport
4. Users can play/pause and use fullscreen controls

## Current Status
⚠️ **Video not yet added** - Place your `showreel.mp4` file in this directory.

## Adding Your Video
1. Export your showreel as MP4 with the recommended settings above
2. Rename it to exactly `showreel.mp4`
3. Place it in this `/website/videos/` directory
4. The website will automatically use it

## Backup & Compression Tools
If your video is too large, consider using:
- **HandBrake** (free, cross-platform)
- **Adobe Media Encoder** (if you have Creative Cloud)
- **CloudConvert** (online tool)
- **FFmpeg** (command-line tool)

### FFmpeg Compression Example
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k showreel.mp4
```

---
*Last Updated: January 14, 2026*
