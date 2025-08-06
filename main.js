document.addEventListener('DOMContentLoaded', function() {
  // Инициализация анимированного фона
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ff3333" },
      "shape": { "type": "circle", "stroke": { "width": 0, "color": "#ff0000" } },
      "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
      "size": { "value": 7, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
      "line_linked": { "enable": true, "distance": 150, "color": "#ff6666", "opacity": 0.2, "width": 1 },
      "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
      "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });
  
  // Переключение меню
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');
  
  menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active');
  });
  
  // Анимация при скролле
  const animateOnScroll = () => {
    const cards = document.querySelectorAll('.content-card');
    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (cardPosition < screenPosition) {
        card.style.animation = `fadeInUp 0.6s forwards ${index * 0.1}s`;
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});
