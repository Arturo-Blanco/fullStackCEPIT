let datoAltura = document.getElementById("datoAltura");
let btnAltura = document.getElementById("btnAltura");

btnAltura.addEventListener("click", () => {
  let alturaPermitida: number = 1.3;
  let alturaPersona: number = Number(datoAltura.value);
  if (alturaPersona <= alturaPermitida) {
    console.log("La persona no puede subir al juego");
  } else {
    console.log("La persona puede subir al juego");
  }
});
