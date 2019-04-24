// ParticlesJS module

const particlesJS = () => {
  // Script for landing page with ParticlesJS
  // Docs:https://github.com/marcbruederlin/particles.js
  console.log('particlesJS');

  Particles.init({
    color: '#212121',
    connectParticles: true,
    maxParticles: 88,
    minDistance: 120,
    opacity: .95,
    responsive: [
      {
        breakpoint: 992,
        options: {
          maxParticles: 88,
          minDistance: 100
        }
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 66,
          minDistance: 90
        }
      },
      {
        breakpoint: 480,
        options: {
          maxParticles: 44,
          minDistance: 80
        }
      }
    ],
    selector: '.js-particles',
    sizeVariations: 4,
    speed: 0.85
  });
};

export { particlesJS };
