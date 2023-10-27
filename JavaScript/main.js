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


$rediNuesObj.forEach((itemDown) =>{
    itemDown.addEventListener('mouseenter', () => {
        itemDown.style.display = 'nonee'
    })
})