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

const obtenerGenerosSeleccionados = () => {
    const generos = document.getElementsByName("generos");
    let seleccionados = [];

    for (let i = 0; i < generos.length; i++) {
        if (generos[i].checked === true) {
            seleccionados = [...seleccionados, generos[i]];
        }
    }

    return seleccionados;
};

const recogerDatosFormulario = (formulario) => {
    return {
        nombre: formulario.nombre.value,
        compositor: formulario.compositor.value,
        fecha: formulario.number.value,
        localizacion: formulario.localizacion.value,
        caratula: formulario.caratula.value,
        prestado: formulario.prestado.checked,
        generosSeleccionados: obtenerGenerosSeleccionados()
    };
};

const validarFormulario = (datos) => {
    let errores = [];

    if (estaVacio(datos.nombre) || !validarNombre(datos.nombre))
        errores = [...errores, "El nombre debe tener al menos 5 caracteres."];

    if (estaVacio(datos.compositor) || !validarNombre(datos.compositor))
        errores = [...errores, "El compositor debe tener al menos 5 caracteres."];

    if (estaVacio(datos.fecha) || !sonNumeros(datos.fecha) || !validarFecha(datos.fecha))
        errores = [...errores, "El año debe tener exactamente 4 dígitos numéricos."];

    if (!tieneGenero(datos.generosSeleccionados))
        errores = [...errores, "Debes seleccionar al menos un género."];

    if (estaVacio(datos.localizacion) || !validarUbicacion(datos.localizacion))
        errores = [...errores, "La localización debe tener el formato ES-001AA."];

    return errores;
};

const guardarDiscoJSON = (datosFormulario) => {
	let generos = [];

    for (let i = 0; i < datosFormulario.generosSeleccionados.length; i++) {
        generos = [...generos, datosFormulario.generosSeleccionados[i].value];
    }
    return {
        nombre: datosFormulario.nombre,
        compositor: datosFormulario.compositor,
        fecha: datosFormulario.fecha,
        generos: generos,
        localizacion: datosFormulario.localizacion,
        prestado: datosFormulario.prestado,
        caratula: datosFormulario.caratula
    };
};
export {
	recogerDatosFormulario,
    validarFormulario,
    guardarDiscoJSON,
    tieneErrores,
    limpiarInformacion,
    mostrarInformacion
};