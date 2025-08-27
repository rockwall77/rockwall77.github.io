particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: '#66fcf1' },
    shape: { type: 'circle', stroke: { width: 0, color: '#000' } },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#45a29e', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
