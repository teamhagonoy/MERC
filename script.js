document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');
  const toggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Scroll shrink effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      hero.classList.add('shrink');
    } else {
      hero.classList.remove('shrink');
    }
  });

  // Theme toggle logic
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark' || (prefersDark && !currentTheme)) {
    document.body.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
});
