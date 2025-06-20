// Custom JavaScript will go here

document.addEventListener('DOMContentLoaded', function () {
    // Example: Smooth scrolling for anchor links in the navbar
    // Select links from new large screen nav, new small screen nav, and footer
    const navLinks = document.querySelectorAll('.main-nav-large a, .main-nav-small a, .footer-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's an anchor link for the current page
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    let headerOffset = 0;

                    // Check for the small screen fixed navigation
                    // The .main-nav-small element itself has the d-lg-none class in the HTML
                    const smallScreenNav = document.querySelector('.main-nav-small.d-lg-none');

                    if (smallScreenNav && getComputedStyle(smallScreenNav).display !== 'none' && getComputedStyle(smallScreenNav).position === 'fixed') {
                        headerOffset = smallScreenNav.offsetHeight;
                    }
                    // For large screens, the navigation is part of the .custom-header-section which scrolls away,
                    // so no separate fixed bar offset is needed. The default headerOffset of 0 is correct.

                    window.scrollTo({
                        top: offsetTop - headerOffset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Optional: Add a class to navbar on scroll for effects
    const desktopNavbar = document.querySelector('.stylish-navbar.fixed-top');
    if (desktopNavbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                desktopNavbar.classList.add('scrolled');
            } else {
                desktopNavbar.classList.remove('scrolled');
            }
        });
    }
});

// You can add more interactivity here, such as:
// - Form validation
// - Animations on scroll for other elements
// - Dynamic content loading for gallery/blog (if not using a backend framework for this)

// Countdown Timer Logic
function parseDuration(durationStr) {
    let totalSeconds = 0;
    const daysMatch = durationStr.match(/(\d+)d/);
    const hoursMatch = durationStr.match(/(\d+)h/);
    const minutesMatch = durationStr.match(/(\d+)m/);

    if (daysMatch) totalSeconds += parseInt(daysMatch[1]) * 24 * 60 * 60;
    if (hoursMatch) totalSeconds += parseInt(hoursMatch[1]) * 60 * 60;
    if (minutesMatch) totalSeconds += parseInt(minutesMatch[1]) * 60;
    
    return totalSeconds;
}

function formatTime(totalSeconds) {
    if (totalSeconds <= 0) return "Ready!";

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    totalSeconds %= (24 * 60 * 60);
    const hours = Math.floor(totalSeconds / (60 * 60));
    totalSeconds %= (60 * 60);
    const minutes = Math.floor(totalSeconds / 60);

    let parts = [];
    if (days > 0) parts.push(days + "d");
    if (hours > 0) parts.push(hours + "h");
    if (minutes > 0 || (days === 0 && hours === 0)) parts.push(minutes + "m");
    
    return parts.join(" ") || "0m";
}

function initializeCountdownTimers() {
    const countdownElements = document.querySelectorAll('.countdown-timer');
    
    countdownElements.forEach(element => {
        const durationStr = element.getAttribute('data-countdown-duration');
        if (durationStr) {
            const totalSeconds = parseDuration(durationStr);
            element.textContent = formatTime(totalSeconds);
        }
    });
}

// Ensure this runs after the DOM is fully loaded.
// The previous DOMContentLoaded listener will execute, then this one.
document.addEventListener('DOMContentLoaded', function () {
    initializeCountdownTimers();
});

// Ensure current year is updated in footer
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Zoom effect for project images
// This refined script relies on CSS for transition, transform-origin, and the zoomed state.
document.addEventListener('DOMContentLoaded', function () { 
const projectImages = document.querySelectorAll('.project-card .project-image');

projectImages.forEach(image => {
image.addEventListener('mouseenter', function () {
    this.classList.add('zoomed'); 
});

image.addEventListener('mouseleave', function () {
    this.classList.remove('zoomed');
});
});
});