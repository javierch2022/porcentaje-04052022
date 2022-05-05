let btnEnviar = document.getElementById("enviar");
rotulo.innerHTML = " Ingrese la posicion de llegada del competidor";

btnEnviar.addEventListener("click", () => {
  let posicionLlegada: number = numer(dato1.value);
  if (posicionLlegada === 1) {
    console.log("entregar la medalla de oro");
  } else {
    if (posicionLlegada === 2) {
      console.log("entregar la medalla de plata");
    } else {
      if (posicionLlegada === 3) {
        console.log("entregar medalla de bronce");
      } else {
        console.log("entregar mencion de participacion");
      }
    }
  }
});
