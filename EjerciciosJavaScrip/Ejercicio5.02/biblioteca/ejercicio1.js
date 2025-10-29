"use strict";

const titulos = document.getElementsByClassName("acordeon-titulo");

const alternarVista = (elemento) => {
    elemento.classList.toggle("ocultar");
}

export { alternarVista };