// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Dark/Light Mode Toggle
const body = document.body;
const modeToggle = document.querySelector('.mode-toggle');
let darkMode = false;

modeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  body.classList.toggle('dark-mode');
  updateModeIcon();
});

function updateModeIcon() {
  modeToggle.innerHTML = darkMode
    ? '<span style="font-size: 1.3rem;">🌙</span>' // Moon icon
    : '<span style="font-size: 1.3rem;">☀️</span>'; // Sun icon
}

// Initial mode icon
updateModeIcon();
