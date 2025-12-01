"use strict";

import { traerDatos } from "./biblioteca/ejercicio1.js";
import { mostrarNombrePeliculas, mostrarPelicula, mostrarErrores, limpiarErrores } from "./biblioteca/pintarDom.js";

window.onload = () => {
    const divPeliculas = document.getElementById("peliculas");
    const divInformacion = document.getElementById("informacion");
    const divErrores = document.getElementById("errores");
    const url = "https://swapi.info/api/films";
    let peliculas = [];

    const cargarPeliculas = async () => {
        try {
            limpiarErrores(divErrores);
            peliculas = await traerDatos(url);
            divPeliculas.innerHTML = mostrarNombrePeliculas(peliculas);
        } catch (error) {
            mostrarErrores(divErrores, `Se ha producido el error: ${error}`);
        }
    };
    cargarPeliculas();

    divPeliculas.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("pelicula-nombre")) {
            const idPelicula = evento.target.id;
            divInformacion.innerHTML = mostrarPelicula(peliculas, idPelicula);
        }
    });

}; // Fin window.onload
