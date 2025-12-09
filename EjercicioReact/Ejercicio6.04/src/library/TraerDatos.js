"use strict";

// Función para traer datos de una URL utilizando fetch y
// devolviendo una promesa con los datos o un error.
const traerDatos = async (url) => {
	try {
		const respuesta = await fetch(url);
		if (!respuesta.ok) {
			throw new Error(
				`Error en traerDatosBien: ${respuesta.status} - ${respuesta.statusText}`
			);
		}
		const datos = await respuesta.json();
		return datos;
	} catch (error) {
		throw error.message;
	}
};

export { traerDatos };
