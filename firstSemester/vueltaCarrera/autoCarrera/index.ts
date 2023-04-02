let vuelta1 = document.getElementById("vuelta1");
let vuelta2 = document.getElementById("vuelta2");
let vuelta3 = document.getElementById("vuelta3");
let vuelta4 = document.getElementById("vuelta4");
let btnDato = document.getElementById("btnDato");

btnDato.addEventListener("click", () => {
  let tiempo1: number = Number(vuelta1.value);
  let tiempo2: number = Number(vuelta2.value);
  let tiempo3: number = Number(vuelta3.value);
  let tiempo4: number = Number(vuelta4.value);
  let tiempoTotal: number = tiempo1 + tiempo2 + tiempo3 + tiempo4;
  console.log("Tiempo total", tiempoTotal);
  console.log("Promedio de vuelta", tiempoTotal / 4);
});
