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
	borrarDisco,
	limpiarFormulario,
	guardarEnLocalStorage,
	cargarLocalStorage,
} from "./biblioteca/ejercicio1.js";
window.onload = () => {
	const formulario = document.getElementById("formu");
	const informacion = document.getElementById("informacion");
	const btnGuardar = document.getElementById("guardar");
	const btnMostrar = document.getElementById("mostrar");
	const mostrar = document.getElementById("lista");
	const btnFiltrar = document.getElementById("filtrar");
	const btnLimpiar = document.getElementById("limpiar");

	if (typeof Storage !== "undefined") {
		let discos = cargarLocalStorage();

		btnGuardar.addEventListener("click", (evento) => {
			const datos = recogerDatosFormulario(formulario);
			let errores = validarFormulario(datos);

			limpiarInformacion(informacion);

			if (!tieneErrores(errores)) {
				let discoJSON = guardarDiscoJSON(datos);
				console.log("Valor de 'discos' (antes de guardar):", discos);
				console.log("Tipo de 'discos' (antes de guardar):", typeof discos);
				discos = [...discos, discoJSON];
				guardarEnLocalStorage(discos);
				mostrarTodoCorrecto(informacion);
				limpiarFormulario(formulario);
			} else {
				mostrarErrores(informacion, errores);
			}
		});

		btnMostrar.addEventListener("click", () => {
			mostrarDiscos(discos, mostrar);
		});

		btnFiltrar.addEventListener("click", () => {
			let nombre = recogerNombreFiltrar(formulario);
			limpiarInformacion(informacion);
			limpiarInformacion(mostrar);
			filtrarDisco(nombre, discos, mostrar);
		});

		btnLimpiar.addEventListener("click", () => {
			limpiarInformacion(informacion);
			limpiarInformacion(mostrar);
			mostrarDiscos(discos, mostrar);
		});

		mostrar.addEventListener("click", (evento) => {
			if (evento.target.classList.contains("borrar")) {
				if (confirm("Quieres borrar este disco?")) {
					if (confirm("¿Pero de verdad?")) {
						discos = borrarDisco(discos, evento.target.id);
						mostrarDiscos(discos, mostrar);
					}
				}
			}
		});
	}
}; // Fin window.onload().
