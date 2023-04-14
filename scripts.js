
/* Ignore default method */

const $form = document.querySelector('form#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData($form)
  const response = await fetch($form.action, {
    method: $form.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    $form.reset()
    alert('¡Gracias por contactarte! Tu consulta sera respondida a la brevedad.')
  }
}

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
        menu.style.display = 'none';
    });
});