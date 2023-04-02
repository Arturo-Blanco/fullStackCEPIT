let posicion = document.getElementById("posicion");
let btnCalculo = document.getElementById("btnCalculo");

btnCalculo.addEventListener("click", () => {
  let posicionLlegada: number = Number(posicion.value);

  switch (posicionLlegada) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mencion de participacion");
  }
});
