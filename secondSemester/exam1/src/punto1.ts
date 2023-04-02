let dimensionArray = Number(prompt(`Ingrese la dimension del arreglo`)); // la dimension del arreglo debia solicitarse al principio
let valoresAleatorios: number[] = new Array(dimensionArray); // Usar nombres mas explicitos para declarar variables
let min: number;

function cargaArreglo(dimensionArray: number) {
  for (let i = 0; i < dimensionArray; i++) {
    valoresAleatorios[i] = Math.floor(Math.random() * 1000);
  }
}

function menorValor(valoresAleatorios: number[]) {
  let minimo: number = valoresAleatorios[0]; // se inicializa menor con el primer valor del array, para tomar un valor mas chico si existiera
  for (let i = 0; i < valoresAleatorios.length; i++) {
    if (valoresAleatorios[i] < minimo) {
      minimo = valoresAleatorios[i];
    }
  }
  min = minimo; // Se intenta resolver con un return pero no se logra hacer funcionar, da valores erroneos
}

function mostrarValores(valoresAleatorios: number[]) {
  console.log(`El arreglo es ${valoresAleatorios}`);
  console.log(`El valor minimo es ${min}`);
}
cargaArreglo(dimensionArray);
menorValor(valoresAleatorios);
mostrarValores(valoresAleatorios);
