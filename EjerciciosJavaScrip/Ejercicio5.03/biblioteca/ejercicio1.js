"use strict";

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

export { construirLienzo };
