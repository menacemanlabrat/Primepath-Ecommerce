// Toggle Dark/Light Mode
const modeToggle = document.getElementById('toggleMode');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  modeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
});

// Toggle Hamburger Menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
