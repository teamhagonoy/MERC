import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  });

  const hero = document.querySelector('.hero-overlay');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    hero.classList.toggle('shrink', scrolled > 50);
  });

  ScrollReveal().reveal('.credits', { delay: 200, distance: '50px', origin: 'bottom', duration: 800, reset: false });
  ScrollReveal().reveal('.image-reveal', { delay: 300, distance: '50px', origin: 'bottom', duration: 900, reset: false });
  ScrollReveal().reveal('.hero-content', { delay: 300, distance: '20px', origin: 'top', duration: 800, reset: false });
});

// Load YouTube API player
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-bg', {
    videoId: '9hZqr1D-aBE',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      mute: 1,
      playlist: '9hZqr1D-aBE',
      playsinline: 1
    },
    events: {
      onReady: event => event.target.mute()
    }
  });
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
