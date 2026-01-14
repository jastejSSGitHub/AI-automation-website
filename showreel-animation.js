// Showreel Scroll-Driven Animations - Smooth Bidirectional
document.addEventListener('DOMContentLoaded', () => {
    const showreelSection = document.getElementById('showreel-section');
    const showreelText = document.getElementById('showreel-text');
    const showreelVideoContainer = document.getElementById('showreel-video-container');

    if (!showreelSection || !showreelText || !showreelVideoContainer) return;

    const updateShowreelAnimation = () => {
        const sectionRect = showreelSection.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const viewportHeight = window.innerHeight;

        // Calculate raw scroll progress (0 to 1+ as we scroll through the section)
        const rawProgress = (viewportHeight - sectionTop) / (viewportHeight * 1.5);

        // Create a smooth curve that peaks at 1.0 (full screen) at rawProgress = 0.5
        // Then decreases back down as we continue scrolling
        // Using a parabolic curve: y = -4(x - 0.5)^2 + 1
        let animationProgress;
        if (rawProgress < 0) {
            animationProgress = 0;
        } else if (rawProgress > 1) {
            animationProgress = 0;
        } else {
            // Parabolic curve that peaks at 0.5
            animationProgress = Math.max(0, -4 * Math.pow(rawProgress - 0.5, 2) + 1);
        }

        // Text animations: fade and scale based on animation progress
        const textOpacity = Math.max(0.02, 0.15 * (1 - animationProgress * 0.9));
        const textScale = Math.max(0.2, 1 - animationProgress * 0.8);

        showreelText.style.opacity = textOpacity;
        showreelText.style.transform = `scale(${textScale})`;

        // Video container animations using smooth easing
        // At peak (animationProgress = 1), video is full screen
        // At 0 or when scrolled past, video is normal size

        if (animationProgress > 0.85) {
            // Approaching or at full screen (smooth transition)
            const fullscreenIntensity = (animationProgress - 0.85) / 0.15; // 0 to 1 in the last 15%

            // Calculate smooth positioning
            const containerWidth = Math.min(100, 80 + (fullscreenIntensity * 20)); // 80vw to 100vw
            const containerHeight = 50 + (fullscreenIntensity * 50); // 50vh to 100vh
            const topPosition = Math.max(0, 10 - (fullscreenIntensity * 10)); // 10vh to 0vh
            const borderRadius = Math.max(0, 16 * (1 - fullscreenIntensity)); // 16px to 0px

            showreelVideoContainer.style.position = 'fixed';
            showreelVideoContainer.style.top = `${topPosition}vh`;
            showreelVideoContainer.style.left = '50%';
            showreelVideoContainer.style.transform = 'translateX(-50%)';
            showreelVideoContainer.style.width = `${containerWidth}vw`;
            showreelVideoContainer.style.height = `${containerHeight}vh`;
            showreelVideoContainer.style.maxWidth = '100vw';
            showreelVideoContainer.style.padding = '0';
            showreelVideoContainer.style.borderRadius = `${borderRadius}px`;
            showreelVideoContainer.style.zIndex = '50';
        } else {
            // Normal state - scale based on progress
            const videoScale = 1 + (animationProgress * 0.3); // Scale from 1.0 to 1.3
            const borderRadius = Math.max(8, 16 - (animationProgress * 8)); // 16px to 8px

            showreelVideoContainer.style.position = 'relative';
            showreelVideoContainer.style.top = 'auto';
            showreelVideoContainer.style.left = 'auto';
            showreelVideoContainer.style.width = '';
            showreelVideoContainer.style.height = '';
            showreelVideoContainer.style.maxWidth = '';
            showreelVideoContainer.style.padding = '';
            showreelVideoContainer.style.transform = `scale(${videoScale})`;
            showreelVideoContainer.style.borderRadius = `${borderRadius}px`;
            showreelVideoContainer.style.zIndex = 'auto';
        }

        requestAnimationFrame(updateShowreelAnimation);
    };

    // Start the animation loop
    requestAnimationFrame(updateShowreelAnimation);
});
