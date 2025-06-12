document.addEventListener('DOMContentLoaded', () => {
  const focusImage = document.getElementById('focusImage');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      focusImage.classList.add('show');
    } else {
      focusImage.classList.remove('show');
    }
  });
});
