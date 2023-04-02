let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let btnEnv = document.getElementById("btnEnv");

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

btnEnv.addEventListener("click", () => {
  let numero1: number = Number(valor1.value);
  let numero2: number = Number(valor2.value);
  if (esMultiplo(numero1, numero2)) {
    console.log(numero1 + " es multiplo de " + numero2);
  } else {
    console.log(numero1 + " no es multiplo de " + numero2);
  }
});
