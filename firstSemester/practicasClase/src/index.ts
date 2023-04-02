function setVectorN() {
  let longitud = Number(prompt("Ingrese dimension del arreglo"));
  let vector: number[] = new Array(longitud);

  for (let index = 0; index < vector.length; index++) {
    vector[index] = Math.floor(Math.random() * 21) + 20;
  }
  // console.log(vector);
  return vector;
}

function mostrarVector(v: number[]) {
  for (let indice: number = 0; indice < v.length; indice++) {
    console.log(v[indice]);
  }
}

function showMinValue(v: number[]) {
  let minimo: number = v[0];
  for (let indice: number = 0; indice < v.length; indice++) {
    if (v[indice] < minimo) {
      minimo = v[indice];
      return minimo;
    }
  }
}

let vResult: number[] = setVectorN();
mostrarVector(vResult);
console.log("El menor es: " + showMinValue(vResult));
