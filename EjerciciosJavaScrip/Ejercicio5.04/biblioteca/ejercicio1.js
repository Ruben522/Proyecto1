"use strict";

// Retorna una copia randomizada del array de imágenes original.
const imagenesAleatorio = (imagenes) => {
	let copia = [...imagenes];
	copia.sort(() => Math.random() - 0.5);
	return copia;
};

// Crea el panel con las imágenes del puzzle.
const crearPanel = (arrayImagenes) => {
	const panel = document.getElementById("piezas");
	for (let i = 0; i < arrayImagenes.length; i++) {
		let img = document.createElement("img");
		img.id = arrayImagenes[i];
		img.src = arrayImagenes[i];
		// Añadimos a cada imagen este atributo para poder hacer la comprobación
		// en la función tableroResuelto().
		img.setAttribute("ruta-original", arrayImagenes[i]);
		img.classList.add("arrastable");
		img.setAttribute("draggable", true);
		panel.appendChild(img);
	}
};

// Crea el tablero de juego.
const construirTablero = (imagenes) => {
	const tablero = document.getElementById("tablero");
	const tabla = document.createElement("table");
	let k = 0;
	for (let i = 0; i < 3; i++) {
		const fila = document.createElement("tr");
		for (let j = 0; j < 3; j++) {
			const celda = document.createElement("td");
			celda.classList.add("soltable");
			// Añadimos a cada celda este atributo para poder hacer la comprobación
			// en la función tableroResuelto().
			celda.setAttribute("ruta-original", imagenes[k]);
			fila.appendChild(celda);
			k++;
		}
		tabla.appendChild(fila);
	}
	tablero.appendChild(tabla);
};

// Elimina el contenido.
const reiniciar = (panel, tablero) => {
	panel.innerHTML = "";
	tablero.innerHTML = "";
	let mensaje = document.getElementById("mensaje");
	mensaje.style.display = "none";
};

// Cambia la clase CSS del mensaje.
const mostrarMensaje = () => {
	let mensaje = document.getElementById("mensaje");
	mensaje.style.display = "block";
};

// Comprueba si el tablero ha sido resuelto.
// Cuando se resuelve, llama a la función
const tableroResuelto = () => {
	let celdas = document.getElementsByClassName("soltable");
	let acertado = 0;

	for (let i = 0; i < celdas.length; i++) {
		let celda = celdas[i];
		let imagenDentro = celda.querySelector("img");
		if (imagenDentro) {
			let idCorrecto = celda.getAttribute("ruta-original");
			let idPieza = imagenDentro.getAttribute("ruta-original");

			if (idCorrecto === idPieza) {
				acertado++;
			}
		}
	}
	if (acertado === celdas.length) {
		mostrarMensaje();
	}
};
export {
	imagenesAleatorio,
	crearPanel,
	construirTablero,
	reiniciar,
	tableroResuelto,
};
