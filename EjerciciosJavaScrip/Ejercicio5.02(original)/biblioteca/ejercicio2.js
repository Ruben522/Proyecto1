"use strict";

const cambiarPestana = (evento) => {
  const elemento = evento.target;

  const pestanas = document.getElementsByClassName("pestana");
  const contenidos = document.getElementsByClassName("contenido");

  // Primero quitamos las clases activas de todas
  for (let i = 0; i < pestanas.length; i++) {
    pestanas[i].classList.remove("pestanaActiva");
    contenidos[i].classList.remove("mostrar");
  }

  // Luego activamos solo la pestaña clicada y su contenido
  for (let i = 0; i < pestanas.length; i++) {
      if (elemento === pestanas[i]) {
      pestanas[i].classList.add("pestanaActiva");
      contenidos[i].classList.add("mostrar");
      break; // Ya lo encontramos, no hace falta seguir
    }
    }
};

export { cambiarPestana };
