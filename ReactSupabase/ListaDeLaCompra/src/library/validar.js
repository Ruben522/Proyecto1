import React from "react";

// Valida que el nombre tenga 5 caracteres o más.
const validarNombre = (nombre) => {
    return nombre.length >= 3;
};

// Comprueba si hay algún carácter.
const estaVacio = (caracteres) => {
    return caracteres === "";
};

const validarContraseña = (caracteres) => {
    return caracteres.length >= 8;
};

const validarPrecio = (precio) => {
    return precio > 0;
};

const validarPeso = (peso) => {
    return peso > 0;
};

const validarSesion = (datos) => {
    let errores = [];
    if (estaVacio(datos.email))
        errores = [...errores, "El email es obligatorio."];

    if (!validarContraseña(datos.password))
        errores = [
            ...errores,
            "La contraseña debe tener al menos 8 caracteres.",
        ];

    return errores;
};

const validar = (datos) => {
    let errores = [];

    if (estaVacio(datos.name) || !validarNombre(datos.name))
        errores = [
            ...errores,
            "El nombre debe tener al menos 3 caracteres.",
        ];

    if (estaVacio(datos.email))
        errores = [...errores, "El email es obligatorio."];

    if (!validarContraseña(datos.password))
        errores = [
            ...errores,
            "La contraseña debe tener al menos 8 caracteres.",
        ];

    return errores;
};

const validarProducto = (datos) => {
    let errores = [];

    if (estaVacio(datos.name))
        errores = [
            ...errores,
            "El nombre del producto es obligatorio.",
        ];
    if (!validarPrecio(datos.price))
        errores = [
            ...errores,
            "El precio del producto debe ser mayor que 0.",
        ];
    if (!validarPeso(datos.weight))
        errores = [
            ...errores,
            "El peso del producto debe ser mayor que 0.",
        ];

    return errores;
};

export { validar, validarSesion, validarProducto };
