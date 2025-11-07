"use strict";

const imagenesAleatorio = (imagenes) => {
	let copia = [...imagenes];
	copia.sort(() => Math.random() - 0.5);
	return copia;
};

const crearPanel = (arrayImagenes) => {
	let lista = document.createElement("ul");
	for (let i = 0; i < arrayImagenes.length; i++) {
		const elemento = document.createElement("li");
		let img = document.createElement("img");
		img.src = arrayImagenes[i];
		elemento.appendChild(img);
		lista.appendChild(elemento);
	}
	document.getElementById("piezas").appendChild(lista);
};

const construirTablero = (alto, ancho) => {
	const tabla = document.createElement("table");
	for (let i = 0; i < alto; i++) {
		const fila = document.createElement("tr");
		for (let j = 0; j < ancho; j++) {
			const celda = document.createElement("td");
			fila.appendChild(celda);
		}
		tabla.appendChild(fila);
	}
	document.getElementById("tablero").appendChild(tabla);
};

const reiniciar = (panel, tablero) => {
	panel.innerHTML = "";
	tablero.innerHTML = "";
};

export { imagenesAleatorio, crearPanel, construirTablero, reiniciar };
