// This is the complete script for the bottom of your page
const toggleButton = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');
const docElement = document.documentElement;

/**
 * Applies the given theme and updates the icon.
 * @param {string} theme - The theme to apply ('dark' or 'light').
 */
function applyTheme(theme) {
  if (theme === 'dark') {
    docElement.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
  } else {
    docElement.classList.remove('dark-mode');
    toggleIcon.textContent = '🌙';
  }
}

// Event listener for the toggle button click
toggleButton.addEventListener('click', () => {
  // Check if dark mode is currently active
  const isDark = docElement.classList.contains('dark-mode');
  const newTheme = isDark ? 'light' : 'dark';
  
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});

// Set the correct theme and icon when the page initially loads
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});