let arrayName: string[] = new Array(2);
let arrayNumber: number[] = new Array(3);
let i: number;

for (i = 0; i < 2; i++) {
  arrayName[i] = String(prompt(`Ingrese nombre de la posicion ${i + 1}`));
}
for (i = 0; i < 3; i++) {
  arrayNumber[i] = Number(prompt(`Ingrese numero de la posicion ${i + 1}`));
}

for (i = 0; i < 2; i++) {
  console.log(`El nombre de la posicion ${i + 1} es ${arrayName[i]}`);
}
for (i = 0; i < 3; i++) {
  console.log(`El numero de la posicion ${i + 1} es ${arrayNumber[i]}`);
}
