let valor = document.getElementById("valor");
let btnVal = document.getElementById("btnVal");

btnVal.addEventListener("click", () => {
  let sueldoActual: number = Number(valor.value);
  let nuevoSueldo: number = 0;
  if (0 < sueldoActual && sueldoActual <= 15000) {
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Usted tiene un aumento del 20%");
    console.log("Su nuevo sueldo es " + nuevoSueldo);
  } else {
    if (15000 < sueldoActual && sueldoActual <= 20000) {
      nuevoSueldo = sueldoActual * 1.1;
      console.log("Usted tiene un aumento del 10%");
      console.log("Su nuevo sueldo es " + nuevoSueldo);
    } else {
      if (20000 < sueldoActual && sueldoActual <= 25000) {
        nuevoSueldo = sueldoActual * 1.05;
        console.log("Usted tiene un aumento del 5%");
        console.log("Su nuevo sueldo es " + nuevoSueldo);
      } else {
        nuevoSueldo = sueldoActual;
        console.log("Usted no tiene aumento de sueldo");
      }
    }
  }
});
