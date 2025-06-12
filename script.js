document.addEventListener('DOMContentLoaded', () => {
  const amenityList = document.getElementById('amenity-list');

  // Improve scroll behavior and prevent it only on horizontal axis
  if (amenityList) {
    amenityList.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        amenityList.scrollLeft += e.deltaY;
      }
    }, { passive: false }); // passive: false allows preventDefault
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const focusImage = document.getElementById('focusImage');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      focusImage.classList.add('show');
    } else {
      focusImage.classList.remove('show');
    }
  });
});
