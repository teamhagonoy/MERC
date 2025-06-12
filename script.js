document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      hero.classList.add('shrink');
    } else {
      hero.classList.remove('shrink');
    }
  });
});
