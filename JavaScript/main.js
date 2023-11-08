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
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const busqueda = urlParams.get("busqueda");

  if (busqueda) {
    const palabrasClave = busqueda.toLowerCase().split(" ");

    const resultados = propiedades.filter((propiedad) =>
      palabrasClave.every((clave) =>
        Object.values(propiedad)
          .map((valor) => valor.toString().toLowerCase())
          .some((valor) => valor.includes(clave))
      )
    );

    const resultadosContainer = document.getElementById("resultado");

    if (resultados.length > 0) {
      resultadosContainer.innerHTML = `<h1 class="titleResultados">Resultados de la búsqueda para "${busqueda}":</h1>`;
      resultados.forEach((propiedad) => {
        resultadosContainer.innerHTML += `
          <div class="resultado-card">
            <img src="${propiedad.img}" alt="Imagen de la propiedad">
            <p>Tipo: ${propiedad.tipo}</p>
            <p>Habitaciones: ${propiedad.habitaciones}</p>
            <p>Baños: ${propiedad.baños}</p>
            <p>Patio: ${propiedad.patio}</p>
            <p>Ubicación: ${propiedad.ubicación}</p>
            <p>Precio: $${propiedad.precio}</p>

          </div>
        `;
      });
    } else {
      resultadosContainer.innerHTML = `<p class="parraforNegativo">No se encontraron resultados para "${busqueda}".</p>`;
    }
  } else {
    // Caso especial cuando el campo de búsqueda está vacío
    
    mostrarTodasLasPropiedades();
  }

  function mostrarTodasLasPropiedades() {
    const resultadosContainer = document.getElementById("resultado");
    resultadosContainer.innerHTML = ""; // Limpia cualquier resultado anterior

    propiedades.forEach((propiedad) => {
      resultadosContainer.innerHTML += `
        <div class="resultado-card">
          <img src="${propiedad.img}" alt="Imagen de la propiedad">
          <p>Tipo: ${propiedad.tipo}</p>
          <p>Habitaciones: ${propiedad.habitaciones}</p>
          <p>Baños: ${propiedad.baños}</p>
          <p>Patio: ${propiedad.patio}</p>
          <p>Ubicación: ${propiedad.ubicación}</p>
          <p>Precio: $${propiedad.precio}</p>
        </div>
      `;
    });
  }
});