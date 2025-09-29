"use strict";

// Muestra por consola las claves y valores del objeto curso.
const mostrarCurso = (curso) => {
	for (let clave in curso) {
		if (curso.hasOwnProperty(clave)) {
			
			if (Array.isArray(curso[clave])) {
				// He usado forEach para recorrer los arrays ya que únicamente quiero mostrar información.
				curso[clave].forEach((valor) => {
					console.log(
						`La clave es ${clave} y el valor es ${valor} y es del tipo ${typeof valor}`
					);
				});
			}
			else
				console.log(
					`La clave es ${clave} y el valor es ${curso[clave]
					} y es del tipo ${typeof curso[clave]}`
				);
		}
	}
};

export { mostrarCurso };
