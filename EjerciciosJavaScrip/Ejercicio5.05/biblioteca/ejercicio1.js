"use strict";

// Valida que el nombre tenga 5 caracteres o más.
const validarNombre = (nombre) => {
	return nombre.length >= 5;
};

// Comprueba si hay algún caracter.
const estaVacio = (caracteres) => {
	return caracteres === "";
};

// Valida que el año tenga 4 dígitos.
const validarFecha = (fecha) => {
	return fecha.length === 4 && sonNumeros(fecha);
};

// Comprueba que sean números.
const sonNumeros = (numeros) => {
	return !isNaN(numeros);
};

// Comprueba si hay seleccionado algún género (Array).
const tieneGenero = (generos) => {
	return generos.length !== 0;
};

// Valida según la expresión regular.
const validarUbicacion = (ubicacion) => {
	let expresion = /^ES-\d{3}[A-Z]{2}$/;

	return expresion.test(ubicacion);
};

// Comprueba si hay errores.
const tieneErrores = (errores) => {
	return errores.length > 0;
};

// Elimina todo el contenido del div información que contiene los errores.
const limpiarInformacion = (divInfo) => {
	divInfo.innerHTML = "";
	divInfo.style.display = "none";
};

const mostrarInformacion = (divInfo, mensaje) => {
	divInfo.style.display = "block";
	divInfo.innerHTML = mensaje;
};

const guardarEnJSON = (formulario, discos) => {
	const disco = [
		{
			nombre: formulario.nombre.value,
			compositor: formulario.compositor.value,
			fecha: formulario.number.value,
			localizacion: formulario.localizacion.value,
			generos: Array.from(formulario.generos),
			prestado: formulario.prestado.checked,
		},
	];
	return [...discos, disco];
};
export {
	validarNombre,
	estaVacio,
	sonNumeros,
	validarFecha,
	tieneGenero,
	validarUbicacion,
	tieneErrores,
	mostrarInformacion,
	limpiarInformacion,
	guardarEnJSON,
};
