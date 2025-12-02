"use strict";

// Devuelve los nombres de las películas.
const nombresPelicula = (datos) => {
	return `
        <p id="${datos.episode_id}" class="pelicula-nombre"><strong>Nombre: </strong>${datos.title}</p>
    `;
};

// Devuelve la estructura de la película.
const estructuraPelicula = (datos) => {
	return `
        <div id="${datos.episode_id}" class="pelicula-informacion">
                <p><strong>Nombre: </strong>${datos.title}</p>
                <p><strong>Sinopsis: </strong>${datos.opening_crawl}</p>
                <p><strong>Director: </strong>${datos.director}</p>
                <p><strong>Productor: </strong>${datos.producer}</p>
                <p><strong>Fecha: </strong>${transformarFechaCastellano(
									new Date(datos.release_date)
								)}</p>
        </div>
    `;
};

// Devuelve los nombres de las películas.
const mostrarNombrePeliculas = (peliculas) => {
	let contenido = "";
	for (let i = 0; i < peliculas.length; i++) {
		let pelicula = peliculas[i];
		contenido += nombresPelicula(pelicula);
	}
	return contenido;
};

// Devuelve la información de una película según un id.
const mostrarPelicula = (peliculas, id) => {
	const pelicula = peliculas.find((p) => p.episode_id === Number.parseInt(id));
	return estructuraPelicula(pelicula);
};

// Elimina todo el contenido del div errores.
const limpiarErrores = (divErrores) => {
	divErrores.innerHTML = "";
	divErrores.style.display = "none";
};

// Muestra los errores en el div errores.
const mostrarErrores = (divErrores, mensaje) => {
	divErrores.style.display = "block";
	divErrores.innerHTML = mensaje;
};

// Transforma una fecha al formato Español.
const transformarFechaCastellano = (fecha) => {
	return fecha.toLocaleDateString("es-ES");
};

export {
	mostrarNombrePeliculas,
	mostrarPelicula,
	mostrarErrores,
	limpiarErrores,
};
