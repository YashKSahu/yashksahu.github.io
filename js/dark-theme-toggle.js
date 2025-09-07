const toggleButton = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');
const docElement = document.documentElement;

const PRISM_LIGHT = 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-light.min.css';
const PRISM_DARK  = 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-dark.min.css';
const prismLink = document.getElementById('prism-theme');

function applyTheme(theme) {
  if (theme === 'dark') {
    docElement.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
    if (prismLink) prismLink.href = PRISM_DARK;
  } else {
    docElement.classList.remove('dark-mode');
    toggleIcon.textContent = '🌙';
    if (prismLink) prismLink.href = PRISM_LIGHT;
  }
}

// Apply saved theme **immediately**, before Prism runs
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Now set up toggle button
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isDark = docElement.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  });
}
