
/* Hamburguer Menu by Bing ChatGPT */

var button = document.querySelector('#hamburger-button');
var menu = document.querySelector('.left-section');

// Agrega un controlador de eventos para el botón
button.addEventListener('click', function() {
    // Muestra u oculta el menú al hacer clic en el botón
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
// Selecciona todos los enlaces del menú
var links = menu.querySelectorAll('a');

// Agrega un controlador de eventos para cada enlace
links.forEach(function(link) {
    link.addEventListener('click', function() {
        // Oculta el menú al hacer clic en un enlace
        if (window.innerWidth < 768) {
          menu.style.display = 'none';
      }
    });
});