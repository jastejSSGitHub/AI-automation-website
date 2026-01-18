// Shared Navigation and Routing Logic for LoopSuit Website
// This file provides consistent navigation across all pages

// Mobile Menu Functions
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    if (menu.classList.contains('menu-closed')) {
        menu.classList.remove('menu-closed');
        menu.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    } else {
        closeMenuAndNavigate();
    }
}

function closeMenuAndNavigate() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    menu.classList.remove('menu-open');
    menu.classList.add('menu-closed');
    document.body.style.overflow = '';
}

// Calendly Integration
function openCalendly() {
    const calendlyUrl = 'https://calendly.com/your-username/30min'; // Replace with actual URL
    if (typeof Calendly !== 'undefined') {
        Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
        window.open(calendlyUrl, '_blank');
    }
    return false;
}

// Smooth Page Transitions (Progressive Web App feel)
function navigateToPage(url, event) {
    if (event) {
        event.preventDefault();
    }

    // Close mobile menu if open
    closeMenuAndNavigate();

    // Add fade out effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.2s ease';

    // Navigate after fade
    setTimeout(() => {
        window.location.href = url;
    }, 200);
}

// Navbar Scroll Effect
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('inner-nav');
        if (!nav) return;

        if (window.scrollY > 20) {
            nav.classList.add('glass-nav-scrolled');
            nav.classList.remove('py-3');
            nav.classList.add('py-2');
        } else {
            nav.classList.remove('glass-nav-scrolled');
            nav.classList.add('py-3');
            nav.classList.remove('py-2');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Fade in page
    document.body.style.opacity = '1';

    // Initialize navbar scroll effect
    initNavbarScroll();

    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Add click listeners for mobile menu
    const hamburgerBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenuAndNavigate);
    }

    // Highlight active page in navigation
    highlightActivePage();
});

// Highlight active page in navigation
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[href]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Check if this link points to the current page
        if (href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === 'services.html' && href === 'services.html') ||
            (currentPage === 'case-studies.html' && href === 'case-studies.html')) {

            // Add active styling
            link.classList.add('text-blue-500');
            link.classList.remove('text-gray-300', 'text-white');
        }
    });
}
