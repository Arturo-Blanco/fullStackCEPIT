"use strict";

let arrBotones=document.querySelectorAll('button');

for (let i= 0 ; i<arrBotones.length ; i++) {
arrBotones[i].addEventListener('click', ocultarMostrar);

}

function ocultarMostrar() {
document.querySelector('.divOculto').classList.toggle('ocultar');
}