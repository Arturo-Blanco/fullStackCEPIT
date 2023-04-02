let dato = document.getElementById("dato");
let btnNum = document.getElementById("btnNum");

btnNum.addEventListener("click", () => {
  let numIngresado: number = Number(dato.value);

  switch (numIngresado) {
    case 0:
      console.log("El numero ingresado es cero");
      break;

    default:
      console.log("El numero ingresado es par", numIngresado % 2 === 0);
      break;
  }
});
