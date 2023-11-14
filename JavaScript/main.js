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


/*nav responsive */
const navResponsive = document.querySelector('.nav-responsive');
const nav = document.querySelector('nav');

let menuVisible = false;

navResponsive.addEventListener('click', () => {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
});


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



/* filtrado de búsqueda */



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
      resultadosContainer.innerHTML = `<h1 class="titleResultados">- Resultados de la búsqueda para "${busqueda}":</h1>`;
      resultados.forEach((propiedad) => {
        resultadosContainer.innerHTML += `
          <div class="resultado-card">
            <div id="carousel-${propiedad.id}" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${propiedad.img1}" class="d-block w-100" alt="Imagen 1">
                </div>
                <div class="carousel-item">
                  <img src="${propiedad.img2}" class="d-block w-100" alt="Imagen 2">
                </div>
                <div class="carousel-item">
                  <img src="${propiedad.img3}" class="d-block w-100" alt="Imagen 3">
                </div>
                <div class="carousel-item">
                  <img src="${propiedad.img4}" class="d-block w-100" alt="Imagen 4">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carousel-${propiedad.id}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel-${propiedad.id}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
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
      resultadosContainer.innerHTML = `<p class="parraforNegativo">- No se encontraron resultados para "${busqueda}".</p>`;
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
          <div id="carousel-${propiedad.id}" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${propiedad.img1}" class="d-block w-100" alt="Imagen 1">
              </div>
              <div class="carousel-item">
                <img src="${propiedad.img2}" class="d-block w-100" alt="Imagen 2">
              </div>
              <div class="carousel-item">
                <img src="${propiedad.img3}" class="d-block w-100" alt="Imagen 3">
              </div>
              <div class="carousel-item">
                <img src="${propiedad.img4}" class="d-block w-100" alt="Imagen 4">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carousel-${propiedad.id}" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-${propiedad.id}" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
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




