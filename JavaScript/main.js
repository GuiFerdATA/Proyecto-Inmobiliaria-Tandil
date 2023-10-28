const $enlacesMenu = document.querySelectorAll('.contenedor_header ul li a')
const $btnDown = document.querySelector('.contenido_secPrincipal a')
const $rediNuesObj = document.getElementById('#nuestroObjetivo')

$enlacesMenu.forEach((items) => {
    items.addEventListener('mouseenter', () => {
        items.style.backgroundColor = 'rgb(249, 183, 0)'
    });
    items.addEventListener('mouseleave', () => {
        items.style.backgroundColor = ''
    })
});

window.addEventListener('load', function() {
    // Espera 2 segundos (2000 milisegundos) antes de ocultar el elemento 'loader'
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
    }, 300);
  });
  window.addEventListener('load', function() {
    // Espera 2 segundos (2000 milisegundos) antes de ocultar el elemento 'loader'
    setTimeout(function() {
      document.getElementById('loader2').style.display = 'none';
    }, 600);
  });





