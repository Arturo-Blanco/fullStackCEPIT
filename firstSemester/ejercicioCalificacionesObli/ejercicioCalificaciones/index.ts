let alumno: string = String(prompt("Ingrese nombre alumno"));

while (alumno !== "") {
  let nota1: number = Number(prompt("Ingrese nota practica"));
  let nota2: number = Number(prompt("Ingrese nota problemas"));
  let nota3: number = Number(prompt("Ingrese nota teorica"));
  console.log("Alumno: " + alumno);
  console.log("Su nota practica es: " + nota1);
  console.log("Su nota problemas es: " + nota2);
  console.log("Su nota teorica es: " + nota3);

  let notaTotal: number = Number(nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4);

  let condicion =
    nota1 <= 10 &&
    nota2 <= 10 &&
    nota3 <= 10 &&
    nota1 >= 0 &&
    nota2 >= 0 &&
    nota3 >= 0;

  if (condicion === true) {
    console.log("La nota final de: " + alumno + " es " + notaTotal);
  } else {
    console.log("Error en la carga de datos");
  }
  alumno = String(prompt("Ingrese nombre alumno"));
}
