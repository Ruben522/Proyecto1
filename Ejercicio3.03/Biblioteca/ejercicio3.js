"use strict";

// Simula la creación de un objeto discente con varios atributos y métodos.
// Los métodos muestran información sobre el discente.
const discente = () => {
	return {
		id: 1,
		nombre: "Ruben",
		apellidos: "Garcia Fernandez",
		aficiones: ["deporte", "jugar", "leer"],
		notas: {
			primera: 2,
			segunda: 8,
			tercera: 7,
		},

		calcularMedia: function () {
			return (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3;
		},

		imprimirAficiones: function () {
			return this.aficiones;
		},

		imprimirInforme: function () {
			console.log(`El discenente con nombre ${this.nombre} y apellidos ${this.apellidos} 
			tiene las siguientes aficiones: ${this.imprimirAficiones()}. 
			Además, tiene estas notas: Primera: ${this.notas.primera}, Segunda: ${this.notas.segunda}, Tercera: ${this.notas.tercera}  
			con una nota media de: ${this.calcularMedia().toLocaleString("es-ES")}.`);
		}
	};
};

export { discente };
