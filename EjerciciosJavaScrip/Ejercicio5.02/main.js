"use strict";

import { alternarVista } from "./biblioteca/ejercicio1.js";

window.onload; {
    const elementos = document.getElementsByClassName("acordeon-titulo");

    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.addEventListener("click", (evento) =>{
            alternarVista(element);
        });
    }

}; // Fin de window.onload