// scripts.js

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('mode-icon');
  icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
