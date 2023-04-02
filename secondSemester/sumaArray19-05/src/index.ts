let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
let valor1: number, valor2: number, i: number; 

for (i = 0; i < v1.length; i++) {
  valor1 = Number(prompt(`Ingrese valor ${i + 1}del primer arreglo`));
  v1[i] = valor1;
}
for (i = 0; i < v2.length; i++) {
  valor2 = Number(prompt(`Ingrese valor ${i + 1} del segundo arreglo`));
  v2[i] = valor2;
}
for (i = 0; i < vSuma.length ; i++) {
  vSuma[i] = v1[i] + v2[i];
}
console.log(`Los numeros del primer arreglo son: ${v1}`);
console.log(`Los numeros del segundo arreglo son: ${v2}`);
console.log(`La suma de cada elemento del arreglo son ${vSuma}`);
