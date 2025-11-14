"use strict";
import {
	validarNombre,
	validarGrupo,
	validarAnio,
	tieneGenero,
	validarUbicación,
} from "./biblioteca/ejercicio1.js";
window.onload = () => {
	let formulario = document.getElementById("formu");
	document.getElementById("guardar").addEventListener("click", () => {
		let nombre = formulario.nombre.value;
		let valido = validarNombre(nombre);
		valido
			? console.log("Nombre correcto")
			: console.log("No tiene el formato apropiado");
	});
}; //Fin windows.onload.
