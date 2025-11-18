"use strict";

import {
	recogerDatosFormulario,
	validarFormulario,
	guardarDiscoJSON,
	tieneErrores,
	limpiarInformacion,
	mostrarErrores,
	mostrarTodoCorrecto,
	mostrarDiscos,
	filtrarDisco,
	recogerNombreFiltrar,
} from "./biblioteca/ejercicio1.js";

const formulario = document.getElementById("formu");
const informacion = document.getElementById("informacion");
const btnGuardar = document.getElementById("guardar");
const btnMostrar = document.getElementById("mostrar");
const mostrar = document.getElementById("lista");
const btnFiltrar = document.getElementById("filtrar");
const filtrado = document.getElementById("filtrado");

let discos = [];

btnGuardar.addEventListener("click", (evento) => {
	const datos = recogerDatosFormulario(formulario);
	let errores = validarFormulario(datos);

	limpiarInformacion(informacion);

	if (!tieneErrores(errores)) {
		let discoJSON = guardarDiscoJSON(datos);
		discos = [...discos, discoJSON];
		console.log(discos);
		mostrarTodoCorrecto(informacion);
	} else {
		mostrarErrores(informacion, errores);
	}
});

btnMostrar.addEventListener("click", (evento) => {
	mostrarDiscos(discos, mostrar);
});

btnFiltrar.addEventListener("click", () => {
	let nombre = recogerNombreFiltrar(formulario);
	filtrarDisco(nombre, discos, filtrado);
});
