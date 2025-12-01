"use strict";

const traerDatos = (url) => {
	return fetch(url)
		.then((respuesta) => {
			return respuesta.json();
		})
		.then((datos) => {
			return datos;
		})
		.catch((error) => {
			return `Se ha producido el error ${error}`;
		});
};

//const transformarFecha ()

const nombresPelicula = (datos) => {
	return `
        <div id="${datos.episode_id}" class="peliculas">
            <p><strong>Nombre: </strong>${datos.title}</p>
        </div>
    `;
};

const estructuraPelicula = (datos) => {
	return `
        <div class="pelicula-informacion">
                <p><strong>Nombre: </strong>${datos.title}</p>
                <p><strong>Sinopsis: </strong>${datos.opening_crawl}</p>
                <p><strong>Director: </strong>${datos.director}</p>
                <p><strong>Productor: </strong>${datos.producer}</p>
                <p><strong>Fecha: </strong>${datos.release_date}</p>
        </div>
    `;
};

const mostrarNombrePeliculas = (peliculas) => {
	let contenido = "";
	for (let i = 0; i < peliculas.length; i++) {
		let pelicula = peliculas[i];
		contenido += nombresPelicula(pelicula);
	}
	return contenido;
};

const mostrarPelicula = (peliculas, id) => {
	const pelicula = peliculas.find((p) => p.episode_id === Number.parseInt(id));
	if (!pelicula) {
		return `<p class="error">No se encontró información para la película con ID: ${id}</p>`;
	}

	return estructuraPelicula(pelicula);
};

export { traerDatos, mostrarPelicula, mostrarNombrePeliculas };
