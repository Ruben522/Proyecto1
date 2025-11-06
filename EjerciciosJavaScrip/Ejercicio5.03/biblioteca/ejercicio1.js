"use strict";

// Crea una tabla con las medidas que se indiquen por parámetros.
const construirLienzo = (alto, ancho) => {
	const tabla = document.createElement("table");
	for (let i = 0; i < alto; i++) {
		const fila = document.createElement("tr");
		for (let j = 0; j < ancho; j++) {
			const celda = document.createElement("td");
			fila.appendChild(celda);
		}
		tabla.appendChild(fila);
	}
	document.getElementById("lienzo").appendChild(tabla);
};

// Borra el lienzo cambiando todas las celdas a blanco.
const borrarLienzo = () => {
	const lienzo = document.getElementById("lienzo");
	const celdas = lienzo.getElementsByTagName("td");
	for (let i = 0; i < celdas.length; i++) {
		celdas[i].style.background = "white";
	}
};
export { construirLienzo, borrarLienzo };
