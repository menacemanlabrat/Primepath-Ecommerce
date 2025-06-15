function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
}
