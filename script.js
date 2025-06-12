document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');
  console.log("Hero overlay loaded:", hero);

  window.addEventListener('scroll', () => {
    console.log("ScrollY:", window.scrollY);

    if (window.scrollY > 50) {
      hero.classList.add('shrink');
    } else {
      hero.classList.remove('shrink');
    }
  });
});
