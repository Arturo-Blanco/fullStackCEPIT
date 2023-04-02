let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");
let btnRegistro = document.getElementById("btnRegistro");
let btnCancel = document.getElementById("btnCancel");

let userName: string = "Arturo";
let pass: string = "12345";

btnRegistro.addEventListener("click", () => {
  let userIngresado: string = usuario.value;
  let claveIngresada: string = clave.value;
  if (userName === userIngresado && pass === claveIngresada) {
    console.log("Bienvenido");
  } else {
    console.log("El usuario o clave son incorrectos");
  }
});
btnCancel.addEventListener("click", () => {});
