document.addEventListener('DOMContentLoaded', () => {
  const focusImage = document.getElementById('focusImage');

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.3) {
      focusImage.classList.add('show');
    } else {
      focusImage.classList.remove('show');
    }
  });
});
