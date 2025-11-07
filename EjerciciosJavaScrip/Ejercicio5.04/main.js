"use strict";

import {
	imagenesAleatorio,
	crearPanel,
	construirTablero,
	reiniciar,
} from "./biblioteca/ejercicio1.js";

window.onload = () => {
	const panel = document.getElementById("piezas");
	const tablero = document.getElementById("tablero");
	const reiniciarBtn = document.getElementById("reiniciar");

	let imagenes = [
		"./images/1-1.jpg",
		"./images/1-2.jpg",
		"./images/1-3.jpg",
		"./images/2-1.jpg",
		"./images/2-2.jpg",
		"./images/2-3.jpg",
		"./images/3-1.jpg",
		"./images/3-2.jpg",
		"./images/3-3.jpg",
	];

	crearPanel(imagenesAleatorio(imagenes));
	construirTablero(3, 3);

	reiniciarBtn.addEventListener("click", () => {
		reiniciar(panel, tablero);
		crearPanel(imagenesAleatorio(imagenes));
		construirTablero(3, 3);
	});
}; // Fin windows.onload.
