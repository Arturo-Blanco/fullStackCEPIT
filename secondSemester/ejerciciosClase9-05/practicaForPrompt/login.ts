let clave: string = "Eureka";
let ingreso: string = "";

for (let n = 1; n <= 3; n++) {
  ingreso = prompt("Ingrese la contraseña, intento N° " + n);

  if (ingreso === clave) {
    alert("Ingreso correcto");
    console.log("Bienvenido al sitio");
    break;
  } else {
    if (n === 3) {
      alert("Ha sido bloqueado");
      console.log("Vuelva a intentarlo");
    } else {
      alert("Contraseña incorrecta");
    }
  }
}
