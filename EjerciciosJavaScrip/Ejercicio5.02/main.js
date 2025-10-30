"use strict";

import { alternarVista } from "./biblioteca/ejercicio1.js";

window.onload = () => {
    const titulos = document.getElementsByClassName("acordeon-titulo");

    for (let i = 1; i < titulos.length; i + 2) {
        titulos[i].addEventListener("click", () =>{
            alternarVista(titulos[i]);
        });
    }
    

}; // Fin de window.onload