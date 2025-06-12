document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');
  const credits = document.getElementById('credits');
  const imageReveal = document.getElementById('imageReveal');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    // Shrink hero
    if (scrolled > 50) {
      hero.classList.add('shrink');
    } else {
      hero.classList.remove('shrink');
    }

    // Show credits
    if (scrolled > window.innerHeight * 0.1) {
      credits.classList.add('show');
    } else {
      credits.classList.remove('show');
    }

    // Show image reveal
    const revealPoint = imageReveal.getBoundingClientRect().top;
    if (revealPoint < window.innerHeight * 0.2) {
      imageReveal.classList.add('show');
    } else {
      imageReveal.classList.remove('show');
    }

    // Fade out credits when image section gets close
    if (revealPoint < window.innerHeight * 0.6) {
      credits.classList.add('fade-out');
    } else {
      credits.classList.remove('fade-out');
    }
  });
});
