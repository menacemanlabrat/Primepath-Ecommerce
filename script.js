// Toggle Hamburger Menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Toggle Dark Mode
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;
darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Testimonials Slider
const testimonials = document.querySelector('.testimonials');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const scrollPerClick = 320;

rightBtn.addEventListener('click', () => {
  testimonials.scrollBy({ left: scrollPerClick, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  testimonials.scrollBy({ left: -scrollPerClick, behavior: 'smooth' });
});
