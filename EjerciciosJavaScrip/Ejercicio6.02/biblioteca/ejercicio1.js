"use strict";

const traerDatos = (url) => {
	return (
		fetch(url)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((datos) => {
				return datos;
			})
			// Si se produce un error se devuelve un mensaje.
			.catch((error) => {
				return error;
			})
	);
};

//const transformarFecha ()

const estructuraPelicula = (datos) => {
	return `
        <div id="pelicula" class="pelicula">
            <ul>
                <p><strong>Nombre: </strong>${datos.tittle}</p>
                <div class="mas-informacion">
                    <p><strong>Sinopsis: </strong>${datos.nombre}</p>
                    <p><strong>Director: </strong>${datos.director}</p>
                    <p><strong>Productor: </strong>${datos.producer}</p>
                    <p><strong>Fecha: </strong>${datos.release_date}</p>
                </div>
            </ul>
        </div>
    `;
};

const mostrarPeliculas = (peliculas) => {
	let contenido = "";
	for (let i = 0; i < peliculas.length; i++) {
		let pelicula = peliculas[i];
		contenido += estructuraDisco(pelicula);
	}
	return contenido;
};
export { traerDatos, mostrarPeliculas };
