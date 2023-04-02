let botonRevelar=document.querySelector('.revelar');

/*botonRevelar.addEventListener('click', () => {
document.querySelector('.translucido').classList.toggle('ocultar');
})
*/

botonRevelar.addEventListener('click', revelar);

function revelar() {
document.querySelector('.translucido').classList.toggle('ocultar');

}