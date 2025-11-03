"use strict";

const imagenesAleatorio = (imagenes) => {
	let copia = [...imagenes];

	for (let i = 0; i < copia.length; i++) {
		copia[i] = Math.floor(Math.random() * copia.length);
	}
	return copia;
};
