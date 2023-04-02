let caja = document.querySelector(".container");
let numeroDivs = document.querySelector(".inputNumber");

let btnCrear = document.querySelector(".btnCrear");
  btnCrear.addEventListener("click", () => {
let cantidad= numeroDivs.value;
document.querySelector('.container').innerHTML='';
    crearDivs(cantidad);
  }
);

function crearDivs(cantidad) {
  let divCreado;
    for (let i = 0; i < cantidad; i++) {
    divCreado = document.createElement("div");
    caja.appendChild(divCreado).classList.add("divCreado");
  }
}