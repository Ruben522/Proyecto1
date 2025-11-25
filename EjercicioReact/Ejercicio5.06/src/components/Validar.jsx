import React from "react";

// Valida que el nombre tenga 5 caracteres o más.
const validarNombre = (nombre) => {
	return nombre.length >= 5;
};

// Comprueba si hay algún carácter.
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

// Comprueba si se ha seleccionado algún género (Array).
const tieneGenero = (generos) => {
    return Array.isArray(generos) && generos.length > 0;
  };

// Valida la ubicación usando una expresión regular.
const validarUbicacion = (ubicacion) => { 
	let expresion = /^ES-\d{3}[A-Z]{2}$/;

	return expresion.test(ubicacion);
};

export const Validar = (datos) => {
    let errores = [];

	if (estaVacio(datos.nombre) || !validarNombre(datos.nombre))
		errores = [...errores, "El nombre debe tener al menos 5 caracteres."];

	if (estaVacio(datos.compositor) || !validarNombre(datos.compositor))
		errores = [...errores, "El compositor debe tener al menos 5 caracteres."];

	if (estaVacio(datos.fecha) || !validarFecha(datos.fecha))
		errores = [...errores, "El año debe tener 4 dígitos."];

	if (!tieneGenero(datos.generos))
		errores = [...errores, "Debes seleccionar al menos un género."];

	if (estaVacio(datos.localizacion) || !validarUbicacion(datos.localizacion))
		errores = [...errores, "La localización debe tener el formato ES-001AA."];

	return errores;
};

export default Validar;