let dimensionArreglo: number = Number(
  prompt("Ingrese la dimension del arreglo")
);
let nombrePersonas: string[] = new Array(dimensionArreglo);
let indice: number;
for (indice = 0; indice < dimensionArreglo; indice++) {
  nombrePersonas[indice] = String(
    prompt(`Ingrese nombre de la posicion ${indice + 1}:`)
  );
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    `La persona que ingreso en la posicion ${indice + 1} es ${
      nombrePersonas[indice]
    }`
  );
}
