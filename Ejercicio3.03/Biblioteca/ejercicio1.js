"use strict";

/* const existe = (valor) => {
	if (valor === null || valor === undefined) {
		console.log("El atributo no existe");
	}
}; */

const curso = (nombreCurso, anno, descripcion, alumnado) => {
	/* if (!existe(nombreCurso) || !existe(anno)) {
		return null;
	} */

	return {
		nombreCurso: nombreCurso,
		anno: anno,
		descripcion: descripcion,
		alumnado: alumnado,

		descripcionPorDefecto: function () {
			if (descripcion === null || descripcion === undefined) {
				return "Sin descripción";
			} else {
				return descripcion;
			}
		},
	};
};

const mostrarCurso = (curso) => {
	if (curso === null) {
		console.log("El curso no existe");
		return;
	}
	for (let clave in curso) {
		// Se comprueba que JSON realmente tenga esa propiedad.
		// Se usa uno de sus métodos (hasOwnProperty).
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
export { curso, mostrarCurso };
