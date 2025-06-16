// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Dark Mode Toggle
const body = document.body;
const darkToggle = document.querySelector('.toggle-mode');
const darkIcon = document.querySelector('.toggle-mode img');

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  darkIcon.classList.toggle('rotate');

  if (body.classList.contains('dark')) {
    darkIcon.src = 'sun.svg'; // Add your animated sun icon here
  } else {
    darkIcon.src = 'moon.svg'; // Add your animated moon icon here
  }
});

// Testimonial Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial');
const totalSlides = slides.length;

function showSlide(index) {
  const sliderContainer = document.querySelector('.testimonial-slider');
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('next-slide').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

document.getElementById('prev-slide').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

// Initialize
showSlide(slideIndex);
