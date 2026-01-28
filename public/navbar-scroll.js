document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('main-navbar');
    const innerNav = document.getElementById('inner-nav');
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                // Glass-morphism effect
                if (innerNav) {
                    if (currentScrollY > 20) {
                        innerNav.classList.add('glass-nav-scrolled');
                        innerNav.classList.remove('py-3');
                        innerNav.classList.add('py-2');
                    } else {
                        innerNav.classList.remove('glass-nav-scrolled');
                        innerNav.classList.add('py-3');
                        innerNav.classList.remove('py-2');
                    }
                }

                // Hide/Show logic
                if (navbar) {
                    // Always show if near top or scrolling up
                    if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
                        navbar.classList.remove('navbar-hidden');
                        navbar.classList.add('navbar-visible');
                    } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                        // Hide if scrolling down and not at top
                        navbar.classList.remove('navbar-visible');
                        navbar.classList.add('navbar-hidden');
                    }
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });
});
