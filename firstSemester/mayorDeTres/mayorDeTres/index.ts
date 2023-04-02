let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let valor3 = document.getElementById("valor3");
let btnComp = document.getElementById("btnComp");

btnComp.addEventListener("click", () => {
  let num1: number = Number(valor1.value);
  let num2: number = Number(valor2.value);
  let num3: number = Number(valor3.value);

  if (num1 === num2 || num2 === num3 || num1 === num3) {
    console.log("Ingrese 3 numeros diferentes");
  } else {
    if (num1 > num2 && num1 > num3) {
      console.log("El numero " + num1 + " es el mayor");
    } else {
      if (num2 > num1 && num2 > num3) {
        console.log("El numero " + num2 + " es el mayor");
      } else {
        if (num3 > num1 && num3 > num2) {
          console.log("El numero " + num3 + " es el mayor");
        }
      }
    }
  }
});
