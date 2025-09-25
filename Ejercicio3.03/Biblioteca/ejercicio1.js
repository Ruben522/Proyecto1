"use strict";

const curso = (nombreCurso, anno, descripcion) => {
	return {
		nombreCurso: nombreCurso,
		anno: anno,
		descripcion: descripcion,
		alumnado: [],
	};
};

export { curso };
