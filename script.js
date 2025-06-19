// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Toggle Dark Mode
const toggleMode = document.getElementById('dark-mode-toggle');
toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleMode.classList.toggle('active');
});
