let dimensionArray: number = Number(prompt(`Ingrese la dimension del arreglo`));
let num: number[] = new Array(dimensionArray);
let sum: number = 0;
let i: number;

for (i = 0; i < dimensionArray; i++) {
  num[i] = Number(prompt(`Ingrese numero de la posicion ${i + 1}`));
  sum += num[i];
}

for (i = 0; i < dimensionArray; i++) {
  console.log(`El numero de la posicion ${i + 1} es ${num[i]}`);
}
console.log(`La suma del arreglo es ${sum}`);
