// navbar.js - EXACT NAVBAR FUNCTIONALITY FROM STRENGTH PAGE

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Mobile menu functionality
const mobileBtn = document.getElementById('mobileMenuBtn');
let mobileNav = null;

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        if (!mobileNav) {
            mobileNav = document.createElement('div');
            mobileNav.style.cssText = 'display: flex; flex-direction: column; padding: 1rem 2rem; background: rgba(0, 0, 0, 0.98); backdrop-filter: blur(16px); position: fixed; top: 70px; left: 0; right: 0; z-index: 999; border-bottom: 1px solid #1e2a3a;';
            mobileNav.innerHTML = `
                <a href="index.html" style="padding: 0.7rem 0; color: #e0e4e8; text-decoration: none; font-family: 'Inter', sans-serif;">Home</a>
                <a href="about.html" style="padding: 0.7rem 0; color: #e0e4e8; text-decoration: none; font-family: 'Inter', sans-serif;">About</a>
                <a href="services.html" style="padding: 0.7rem 0; color: #e0e4e8; text-decoration: none; font-family: 'Inter', sans-serif;">Services</a>
                <a href="strength.html" style="padding: 0.7rem 0; color: #e0e4e8; text-decoration: none; font-family: 'Inter', sans-serif;">Strength</a>
                <a href="ecosystem.html" style="padding: 0.7rem 0; color: #e0e4e8; text-decoration: none; font-family: 'Inter', sans-serif;">Ecosystem</a>
                <a href="contact.html" style="padding: 0.7rem 0; color: #e0e4e8; text-decoration: none; font-family: 'Inter', sans-serif;">Contact</a>
            `;
            document.body.appendChild(mobileNav);
        }
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav) {
        mobileNav.style.display = 'none';
    }
});

// Set active class based on current page URL
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);