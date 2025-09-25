"use strict";
import { curso } from "./ejercicio1.js";

const mostrarCurso = (curso) => {
	for (let clave in curso) {
		if (curso.hasOwnProperty(clave)) {
			// Mostrando en pantalla la clave junto a su valor y el tipo de datos.
			console.log(
				`La clave es ${clave} y el valor es ${
					curso[clave]
				} y es del tipo ${typeof curso[clave]}`
			);
		}
	}
};

export { mostrarCurso };
