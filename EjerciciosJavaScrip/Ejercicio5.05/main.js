"use strict";

import {
    validarNombre,
	estaVacio,
	sonNumeros,
	validarFecha,
	tieneGenero,
	validarUbicacion,
	tieneErrores,
	mostrarInformacion,
} from "./biblioteca/ejercicio1.js";

const formulario = document.getElementById("formu");
const informacion = document.getElementById("informacion");
const btnGuardar = document.getElementById("guardar");

btnGuardar.addEventListener("click", () => {
    let errores = [];

    const nombre = formulario.nombre.value;
    const compositor = formulario.compositor.value;
    const fecha = formulario.number.value;
    const localizacion = formulario.localizacion.value;
    const generos = Array.from(formulario.generos);
    const generosSeleccionados = generos.filter(g => g.checked);

    if (estaVacio(nombre) || !validarNombre(nombre))
        errores = [...errores, "El nombre debe tener al menos 5 caracteres."];

    if (estaVacio(compositor) || !validarNombre(compositor))
        errores = [...errores, "El compositor debe tener al menos 5 caracteres."];

    if (estaVacio(fecha) || !sonNumeros(fecha) || !validarFecha(fecha))
        errores = [...errores, "El año debe tener exactamente 4 dígitos numéricos."];

    if (!tieneGenero(generosSeleccionados))
        errores = [...errores, "Selecciona al menos un género musical."];

    if (estaVacio(localizacion) || !validarUbicacion(localizacion))
        errores = [...errores, "La localización debe tener el formato ES-001AA."];

    mostrarInformacion(informacion, errores);
    
});
