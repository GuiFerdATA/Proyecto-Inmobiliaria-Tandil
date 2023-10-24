const $enlacesMenu = document.querySelectorAll('.contenedor_header ul li')
const $btnDown = document.querySelector('.contenido_secPrincipal a')


$enlacesMenu.forEach((items) => {
    items.addEventListener('mouseenter', () => {
        items.style.backgroundColor = 'rgb(249, 183, 0)'
    });
    items.addEventListener('mouseleave', () => {
        items.style.backgroundColor = ''
    })
});


$btnDown.forEach((itemDown) =>{
    itemDown.addEventListener('mouseenter', () => {
        itemDown.style.display = 'nonee'
    })
})