// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Dark mode toggle
  const modeToggle = document.getElementById("modeToggle");
  const body = document.body;

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Optional: Save preference to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Load saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
});
