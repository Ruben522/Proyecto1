"use strict";

import {
	imagenesAleatorio,
	crearPanel,
	construirTablero,
	reiniciar,
	tableroResuelto,
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
	construirTablero(imagenes);

	panel.addEventListener("dragstart", (evento) => {
		if (evento.target.classList.contains("arrastable")) {
			evento.dataTransfer.setData("id", evento.target.id);
		}
	});

	panel.addEventListener("dragover", (evento) => {
		evento.preventDefault();
	});

	panel.addEventListener("drop", (evento) => {
		evento.preventDefault();
		let id = evento.dataTransfer.getData("id");
		let pieza = document.getElementById(id);
		if (pieza && pieza.classList.contains("arrastable")) {
			panel.appendChild(pieza);
		}
	});

	tablero.addEventListener("dragstart", (evento) => {
		if (evento.target.classList.contains("arrastable")) {
			evento.dataTransfer.setData("id", evento.target.id);
		}
	});

	tablero.addEventListener("dragover", (evento) => {
		evento.preventDefault();
	});

	tablero.addEventListener("drop", (evento) => {
		evento.preventDefault();
		let id = evento.dataTransfer.getData("id");
		let pieza = document.getElementById(id);
		if (
			pieza &&
			evento.target.classList.contains("soltable") &&
			evento.target.children.length === 0
		) {
			evento.target.appendChild(pieza);
			tableroResuelto();
		}
	});

	reiniciarBtn.addEventListener("click", () => {
		reiniciar(panel, tablero);
		crearPanel(imagenesAleatorio(imagenes));
		construirTablero(imagenes);
	});
}; //Fin windows.onload.
