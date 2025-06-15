function toggleMenu() {
  const menu = document.getElementById('hamburgerMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('darkIcon');
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    icon.innerText = '☀️';
  } else {
    icon.innerText = '🌙';
  }
}
