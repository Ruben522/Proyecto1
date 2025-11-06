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

export { imagenesAleatorio, crearPanel };
