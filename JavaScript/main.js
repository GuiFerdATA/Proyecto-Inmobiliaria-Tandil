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
const $formBusqueda = document.getElementById('formBusqueda');

$formBusqueda.addEventListener("submit", async (event) => {
    event.preventDefault();

    const terminoBusqueda = document.getElementById('inputBusqueda').value.toLowerCase();
    const propiedadesFiltradas = await buscarPropiedades(terminoBusqueda);

    if (propiedadesFiltradas.length === 0) {
        // Si no se encontraron propiedades, muestra un mensaje o maneja la falta de resultados como prefieras
        alert("No se encontraron propiedades que coincidan con la búsqueda.");
    } else {
        // Accede a la ventana llamada "resultados" si ya está abierta o crea una nueva
        const ventanaResultados = window.open('resultados.html', 'resultados');

        // Espera a que se cargue el contenido de la ventana
        ventanaResultados.onload = function() {
            const resultadosHTML = propiedadesFiltradas.map(propiedad => `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.titulo}</h5>
                        <p class="card-text">Tipo: ${propiedad.tipo}</p>
                        <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
                        <p class="card-text">Baños: ${propiedad.baños}</p>
                        <p class="card-text">Precio: ${propiedad.precio}</p>
                        <p class="card-text">Patio: ${propiedad.patio ? "Sí" : "No"}</p>
                    </div>
                </div>
            `).join('');

            // Inserta el contenido HTML en la ventana "resultados"
            ventanaResultados.document.body.innerHTML = resultadosHTML;
        };
    }
});

async function buscarPropiedades(termino) {
    // Filtrar propiedades basadas en el término de búsqueda
    const propiedadesFiltradas = propiedades.filter(propiedad => {
        return propiedad.titulo.toLowerCase().includes(termino);
    });

    return propiedadesFiltradas;
}




