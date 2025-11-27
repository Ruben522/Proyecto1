"use strict";

import { traerDatos, mostrarPeliculas } from "./biblioteca/ejercicio1.js";

window.onload = () => {
	const url = "https://swapi.info/api/films";
	const divPeliculas = document.getElementById("peliculas");
	const divInformacion = document.getElementById("informacion");
	let peliculas = "";

	const traerDatos = async () => {
		try {
			peliculas = await traerDatos(url);
			console.log("todo correcto");
		} catch (error) {
			console.log(error.message);
		}
	};
	traerDatos();
	divPeliculas.innerHTML = mostrarPeliculas(peliculas);
	divPeliculas.addEventListener;
}; // Fin window.onload.
