@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  display: none;
}

html, body {
  height: 100%;
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
  background: #000;
}

/* Background Video */
.video-bg {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  overflow: hidden;
  z-index: -1;
  background: #000;
}

.video-wrapper {
  position: absolute;
  top: 50%; left: 50%;
  width: 100vw; height: 100vh;
  transform: translate(-50%, -50%);
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
}

.mobile-bg-fallback {
  display: none;
  background: url('assets/bg.jpg') center center / cover no-repeat;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

/* Show fallback image on mobile if video fails */
@media (max-width: 768px) {
  .video-wrapper {
    display: none;
  }
  .mobile-bg-fallback {
    display: block;
  }
}

/* Hero Overlay */
.hero-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  max-width: 80vw;
  max-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  transition: all 0.4s ease;
  transform-origin: top center;
}

.hero-overlay.shrink {
  top: 10px;
  left: 10px;
  transform: scale(0.4);
  border-radius: 10px;
  padding: 5px;
  backdrop-filter: blur(10px);
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  transition: all 0.4s ease;
}

.hero-overlay.shrink .hero-content h2 {
  opacity: 0;
}

.hero-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
  transition: all 0.4s ease;
}

.hero-content h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  margin: 0;
  transition: all 0.4s ease;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-overlay {
    max-width: 70vw;
    max-height: 30vh;
  }

  .hero-logo {
    max-width: 90vw;
    max-height: 60vh;
  }
}

.spacer {
  height: 200vh;
}
