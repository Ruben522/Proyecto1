"use strict";

const discente = (id, nombre, apellidos, aficiones, notas) => {
	return {
		id: id,
		nombre: nombre,
		apellidos: apellidos,
		aficiones: [],
		notas: {
			primera: nota1,
			segunda: nota2,
			tercera: nota3,
		},
	};
};

const calcularMedia = (notas) => {
	let suma = 0;

	for (let i = 0; i < notas.length; i++) {
		suma += notas[i];
	}
	return suma / notas.length;
};

const imprimirAficiones = (discente) => {
	let aficiones = "";
	for (let i = 0; i < discente.aficiones.length; i++) {
		aficiones += discente.aficiones.length[i];
	}
	return aficiones;
};

const imprimirInforme = (discente) => {
	console.log(`El discenente con nombre ${
		discente.nombre
	} y apellidos ${discente.apellidos()} tiene las siguientes aficiones:
        ${imprimirAficiones(
					discente
				)} Además tiene estas notas ${discente.notas()} con una nota media de: ${calcularMedia(
		discente
	)}`);
};

export { discente, calcularMedia, imprimirAficiones, imprimirInforme };
