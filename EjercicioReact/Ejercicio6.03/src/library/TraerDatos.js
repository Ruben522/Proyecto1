"use strict";

// Función para traer datos de una URL utilizando fetch y
// devolviendo una promesa con los datos o un error.
const traerDatos = (url) => {
    return fetch(url)
        .then((respuesta) => {
			return respuesta.json();
		})
		.then((datos) => {
			return datos;
		})
		.catch((error) => {
            throw new Error(error);
		});
};

export { traerDatos };