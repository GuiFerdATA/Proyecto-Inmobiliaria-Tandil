import propiedades from './propiedades.js';




/*carga de pagina*/
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
    }, 300);
});
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loader2').style.display = 'none';
    }, 600);
});
/*fin carga pagina*/


/* hover nav */
const $enlacesMenu = document.querySelectorAll('.contenedor_header ul li a')

$enlacesMenu.forEach((items) => {
    items.addEventListener('mouseenter', () => {
        items.style.backgroundColor = 'rgb(249, 183, 0)'
    });
    items.addEventListener('mouseleave', () => {
        items.style.backgroundColor = ''
    })
});
/*fin hover nav*/



/* filtrado de búsquedo */
const $resultadosContainer = document.getElementById("resultado");

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const busqueda = urlParams.get("busqueda");
  
    if (busqueda) {
      const resultado = propiedades.filter((propiedad) =>
        Object.values(propiedad)
          .map((valor) => valor.toString().toLowerCase())
          .some((valor) => valor.includes(busqueda.toLowerCase()))
      );
  
      if (resultado.length > 0) {
        $resultadosContainer.innerHTML = `<h2>Resultados de la búsqueda para "${busqueda}":</h2>`;
        resultado.forEach((propiedad) => {
          $resultadosContainer.innerHTML += `
            <div>
              <p>Tipo: ${propiedad.tipo}</p>
              <p>Precio: ${propiedad.precio}</p>
              <p>Ubicación: ${propiedad.ubicación}</p>
            </div>
          `;
        });
      } else {
        resultadosContainer.innerHTML = `<p>No se encontraron resultados para "${busqueda}".</p>`;
      }
    }
  });
