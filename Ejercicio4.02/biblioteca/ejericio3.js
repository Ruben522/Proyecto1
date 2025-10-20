"use strict";

// Crea cinco párrafos y los añade al body.
const crearParrafos = () => {
	for (let i = 1; i <= 5; i++) {
		const p = document.createElement("p");
		p.textContent = `Párrafo ${i}`;
		document.body.appendChild(p);
	}
};

// Genera un color RGB aleatorio.
const colorAleatorio = () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	let color = `rgb(${r},${g},${b})`;
	return color;
};

// Devuelve una posición aleatoria entre 0 y 4.
const posicionAleatoria = () => {
	return Math.floor(Math.random() * 5);
};

// Cambia el color de fondo de un párrafo aleatorio.
const cambiarAleatoriamente = () => {
	let parrafos = document.getElementsByTagName("p");

	parrafos[posicionAleatoria()].setAttribute(
		"style",
		`background-color: ${colorAleatorio()}`
	);
};

export { crearParrafos, cambiarAleatoriamente };
