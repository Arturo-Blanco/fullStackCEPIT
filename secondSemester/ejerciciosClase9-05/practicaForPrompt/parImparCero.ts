let numero: number;

numero = Number(prompt("Ingrese número a calcular"));

if (numero % 2 === 0 && numero !== 0) {
  console.log("El numero es par");
} else {
  if (numero % 2 !== 0 && numero !== 0) {
    console.log("El numero es impar");
  } else {
    console.log("El numero es cero, ingrese otro numero");
  }
} 
