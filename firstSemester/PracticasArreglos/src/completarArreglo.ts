let arregloCompletar: number[] = new Array(10);
let i: number;

for (i = 0; i < 10; i++) {
  arregloCompletar[i] = Azar(100);
}
for (i = 0; i < 10; i++) {
  console.log(`El numero de la posicion ${i + 1} es ${arregloCompletar[i]}`);
}
function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}
