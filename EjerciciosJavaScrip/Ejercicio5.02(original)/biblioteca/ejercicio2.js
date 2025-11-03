"use strict";

// Cambia la pestaña activa y muestra su contenido.
const cambiarPestana = (evento) => {
	// Usamos .target para obtener el elemento exacto que fue clicado.
	const elementoClicado = evento.target;

	const pestanas = document.getElementsByClassName("pestana");
	const contenidos = document.getElementsByClassName("contenido");

	// Quitamos la clase activa.
	for (let i = 0; i < pestanas.length; i++) {
		pestanas[i].classList.remove("pestanaActiva");
		contenidos[i].classList.remove("mostrar");
	}

	// Mostramos la pestaña clicada y su contenido.
	for (let i = 0; i < pestanas.length; i++) {
		if (elementoClicado === pestanas[i]) {
			pestanas[i].classList.add("pestanaActiva");
			contenidos[i].classList.add("mostrar");
			break;
		}
	}
};

export { cambiarPestana };
