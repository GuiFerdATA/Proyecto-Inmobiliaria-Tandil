import propiedades from "./propiedades.js";



/* variables */
const $enlacesMenu = document.querySelectorAll('.contenedor_header ul li a')
const $btnDown = document.querySelector('.contenido_secPrincipal a')
const $rediNuesObj = document.getElementById('#nuestroObjetivo')



/*carga de pagina */
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

$formBusqueda.addEventListener("submit", (event) => {
    event.preventDefault();

    const terminoBusqueda = document.getElementById('inputBusqueda').value.toLowerCase();
    const propiedadesFiltradas = buscarPropiedades(terminoBusqueda);

    if (propiedadesFiltradas.length === 0) {
        // Si no se encontraron propiedades
        alert("No se encontraron propiedades que coincidan con la búsqueda.");
    } else {
        // Accede a la ventana llamada "resultados"
        const ventanaResultados = window.open('./resultados.html');

        // Espera a que se cargue el contenido de la ventana
        ventanaResultados.onload = function () {
            const resultadosHTML = propiedadesFiltradas.map(propiedad => `
                <div class="contenedor_header">
                    <header>
                        <div class="logo_img">
                            <img src="./IMG/logo_nav.jpg" alt="logo">
                        </div>
                        <nav id="nav">
                            <ul>
                                <li><a href="../index.html">Inicio</a></li>
                                <li><a href="./pages/portal.html">Portal</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                        </nav>
                        <div class="nav-responsive">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </header>
                </div>
                <body id="body_resultados">
                    <div id="resultadoBusqueda">
                        <div class="card">
                            <img src="${propiedad.img}" alt="${propiedad.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${propiedad.titulo}</h5>
                                <p class="card-text">Tipo: ${propiedad.tipo}</p>
                                <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
                                <p class="card-text">Baños: ${propiedad.baños}</p>
                                <p class="card-text">Precio: ${propiedad.precio}</p>
                                <p class="card-text">Patio: ${propiedad.patio ? "Sí" : "No"}</p>
                            </div>
                        </div>
                    </div>
                </body>
            `).join('');

            // Inserta el contenido HTML en la ventana "resultados"
            ventanaResultados.document.body.innerHTML = resultadosHTML;
        };
    }
});

function buscarPropiedades(termino) {
    return propiedades.filter(propiedad => {
        return (
            propiedad.titulo.toLowerCase().includes(termino) ||
            propiedad.tipo.toLowerCase().includes(termino)   
        );
    });
}





