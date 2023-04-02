let chicos: number[] = new Array(7);
let edades: number = 0;
let promedio: number = 0;

function aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < chicos.length; i++) {
  chicos[i] = aleatorio(3, 7);
  edades += chicos[i];
  promedio = edades / chicos.length;
}
console.log(`La cantidad de chicos es ${chicos.length}`);
console.log(`Las edades son ${chicos}`);
console.log(`La sumatoria de edades es ${edades}`);
console.log(`El promedio de edades es ${promedio.toFixed(2)}`);
