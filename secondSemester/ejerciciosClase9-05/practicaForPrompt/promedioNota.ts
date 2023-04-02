let nota, suma, promedio: number;
suma = 0;
for (let contador = 1; contador <= 10; contador++) {
  nota = Number(prompt("Ingrese la nota numero " + contador + ":"));
  suma += nota;
}
promedio = suma / 10;
console.log("El promedio de las notas es: " + promedio);
