document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');
  const credits = document.getElementById('credits');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    // Shrink hero
    if (scrolled > 50) {
      hero.classList.add('shrink');
    } else {
      hero.classList.remove('shrink');
    }

    // Show credits earlier (from 100px)
    if (scrolled > window.innerHeight * 0.001) {
      credits.classList.add('show');
    } else {
      credits.classList.remove('show');
    }
  });
});
