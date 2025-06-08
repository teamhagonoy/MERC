
// Enable horizontal scrolling with mouse wheel for navigation
document.addEventListener('DOMContentLoaded', function() {
  const amenityList = document.getElementById('amenity-list');
  
  amenityList.addEventListener('wheel', function(e) {
    e.preventDefault();
    amenityList.scrollLeft += e.deltaY;
  });
});
