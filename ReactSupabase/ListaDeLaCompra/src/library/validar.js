import React from "react";

// Valida que el nombre tenga 5 caracteres o más.
const validarNombre = (nombre) => {
	return nombre.length >= 5;
};

// Comprueba si hay algún carácter.
const estaVacio = (caracteres) => {
	return caracteres === "";
};

// Comprueba que sean números.
const sonNumeros = (numeros) => {
	return !isNaN(numeros);
};


export const validar = (datos) => {
    let errores = [];

	if (estaVacio(datos.name) || !validarNombre(datos.name))
		errores = [...errores, "El nombre debe tener al menos 3 caracteres."];

	if (estaVacio(datos.email))
		errores = [...errores, "El email es obligatorio."];

    if (estaVacio(datos.password))
		errores = [...errores, "La contraseña es obligatoria."];

    if (validarNombre(datos.password))
		errores = [...errores, "La contraseña debe tener mas de 4 caracteres."];

	return errores;
};

export default validar;