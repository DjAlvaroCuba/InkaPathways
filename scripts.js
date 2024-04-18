// Ejemplo de uso de JavaScript para animaciones simples

const hero = document.querySelector('.hero');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  hero.style.opacity = 1 - scrollY / 200;
});
