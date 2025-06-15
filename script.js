// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Optional: close menu if you click outside it
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show");
    }
  });

  // Dark mode toggle
  const toggleBtn = document.getElementById("toggle-dark");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update toggle text
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "Light Mode";
    } else {
      toggleBtn.textContent = "Dark Mode";
    }
  });
});
