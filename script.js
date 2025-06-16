// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('overlay'); // Optional darken effect
});

// Close nav on outside click (optional)
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        document.body.classList.remove('overlay');
    }
});

// Optional Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Animate icon
        if (body.classList.contains('dark-mode')) {
            toggleBtn.innerHTML = `<div class="sun"></div>`;
        } else {
            toggleBtn.innerHTML = `<div class="moon"></div>`;
        }
    });
}
