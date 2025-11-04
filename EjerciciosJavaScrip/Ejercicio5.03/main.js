"use strict";

import { construirLienzo } from "./biblioteca/ejercicio1.js";

construirLienzo(30, 30);

let colorSeleccionado = "blanco";
let pintando = false;

const colores = document.getElementById("colores");
const lienzo = document.getElementById("lienzo");

colores.addEventListener("click", (event) => {
	colorSeleccionado = event.target.id;
	console.log(colorSeleccionado);
});

// Empezar a pintar al presionar el botón del ratón
lienzo.addEventListener("mousedown", (event) => {
	if (event.target.tagName === "TD") {
		pintando = true;
		event.target.style.backgroundColor = colorSeleccionado;
	}
});

// Pintar al mover el ratón con el botón presionado
lienzo.addEventListener("mouseover", (event) => {
	if (pintando && event.target.tagName === "TD") {
		event.target.style.backgroundColor = colorSeleccionado;
	}
});
