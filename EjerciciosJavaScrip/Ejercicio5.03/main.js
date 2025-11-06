"use strict";

import { borrarLienzo, construirLienzo } from "./biblioteca/ejercicio1.js";

window.onload = () => {
	construirLienzo(30, 30);

	// He decidido usar variables porque me permite controlar
	// fácilmente el estado en el que se encuentra el programa.

	let colorSeleccionado = "white";
	let pintando = false;

	const colores = document.getElementById("colores");
	const lienzo = document.getElementById("lienzo");
	const borrar = document.getElementById("borrar");

	colores.addEventListener("click", (event) => {
		colorSeleccionado = event.target.id;
		console.log(colorSeleccionado);
	});

	lienzo.addEventListener("mousedown", (event) => {
		if (event.target.tagName === "TD") {
			console.log(event);
			pintando = true;
			event.target.style.backgroundColor = colorSeleccionado;
		}
	});

	lienzo.addEventListener("mouseover", (event) => {
		if (pintando && event.target.tagName === "TD") {
			event.target.style.backgroundColor = colorSeleccionado;
		}
	});

	lienzo.addEventListener("mouseup", () => {
		pintando = false;
	});

	lienzo.addEventListener("mouseleave", (event) => {
		event.preventDefault;
	});

	borrar.addEventListener("click", (event) => {
		borrarLienzo();
	});
}; // Fin windows.onload.
