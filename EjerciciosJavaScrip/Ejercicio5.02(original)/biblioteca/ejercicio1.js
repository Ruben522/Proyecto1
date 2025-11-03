"use strict";

// Alterna la vista del elemento.
const alternarVista = (elemento) => {
	elemento.classList.toggle("ocultar");
};

// Cambia la vista del acordeón al hacer clic.
const cambiarVista = (evento) => {
	// Usamos .target para obtener el elemento exacto que fue clicado.
	const elementoClicado = evento.target;

	if (elementoClicado.classList.contains("elemento-impar")) {
		const contenido = elementoClicado.nextElementSibling;
		alternarVista(contenido);
	}
};

export { cambiarVista };
