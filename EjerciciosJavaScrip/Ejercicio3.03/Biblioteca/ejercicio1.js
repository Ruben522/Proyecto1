"use strict";

// Simula la creación de un objeto curso con tres parámetros de entrada
// y uno que se inicia vacío.
const curso = (nombreCurso, anno, descripcion) => {
	return {
		nombreCurso: nombreCurso,
		anno: anno,
		descripcion: descripcion,
		alumnado: [],

		// Ejercicio 4
		// Una función que añade un discente al array alumnado.
		matricular(discente) {
			this.alumnado.push(discente);
		},
	}
};

export { curso };
