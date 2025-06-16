// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Dark Mode Toggle (Animated Placeholder Logic)
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
let isDark = false;

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  isDark = !isDark;

  // Animate icon switch
  sunIcon.style.display = isDark ? 'none' : 'inline-block';
  moonIcon.style.display = isDark ? 'inline-block' : 'none';
}

sunIcon.addEventListener('click', toggleDarkMode);
moonIcon.addEventListener('click', toggleDarkMode);

// Optional: Close menu on outside click
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('active');
  }
});

// Placeholder for testimonial slider (replace with real logic when testimonials added)
let currentTestimonial = 0;

function showNextTestimonial() {
  const testimonials = document.querySelectorAll('.testimonial-box');
  if (testimonials.length === 0) return;

  testimonials.forEach((box, index) => {
    box.style.display = index === currentTestimonial ? 'block' : 'none';
  });

  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

function showPrevTestimonial() {
  const testimonials = document.querySelectorAll('.testimonial-box');
  if (testimonials.length === 0) return;

  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;

  testimonials.forEach((box, index) => {
    box.style.display = index === currentTestimonial ? 'block' : 'none';
  });
}

// Hook these to your arrow buttons (left/right) when you add them
// document.getElementById('nextTestimony').addEventListener('click', showNextTestimonial);
// document.getElementById('prevTestimony').addEventListener('click', showPrevTestimonial);
