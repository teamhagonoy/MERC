document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');
  const credits = document.getElementById('credits');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      hero.classList.add('shrink');
      credits.classList.add('show');
    } else {
      hero.classList.remove('shrink');
      credits.classList.remove('show');
    }
  });
});
