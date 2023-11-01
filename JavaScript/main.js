import propiedades from "./propiedades.js";



/* variables */
const $enlacesMenu = document.querySelectorAll('.contenedor_header ul li a')
const $btnDown = document.querySelector('.contenido_secPrincipal a')
const $rediNuesObj = document.getElementById('#nuestroObjetivo')



/*carga de pagina */ 
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
  }, 300);
});
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loader2').style.display = 'none';
  }, 600);
});


/* hover nav */
$enlacesMenu.forEach((items) => {
    items.addEventListener('mouseenter', () => {
        items.style.backgroundColor = 'rgb(249, 183, 0)'
    });
    items.addEventListener('mouseleave', () => {
        items.style.backgroundColor = ''
    })
});

/* filtrado de búsquedo */







