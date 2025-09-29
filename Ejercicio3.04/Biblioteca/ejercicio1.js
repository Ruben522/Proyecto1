"use strict";

// Muestra por consola los elementos de un array.
const mostrarArray = (array) => {
    array.forEach((elemento) => console.log(elemento));
}

// Devuelve un nuevo array con los nombres en mayúsculas.
const mostrarEnMayusculas = (nombre) => {
    return nombre.map((n) => n.toUpperCase());
};


// Devuelve un nuevo array con los nombres en orden inverso.
const mostrarRevesAlfabeticamente = (nombre) => {
    return [...nombre].sort().reverse();
}

// Devuelve un array de objetos JSON con id y nombre.
const crearJSONPorNombre = nombre => {
    return nombre.map((nombre, indice) => ({
        id: indice,
        nombre: nombre
    }));
};

export { mostrarArray ,mostrarEnMayusculas, mostrarRevesAlfabeticamente, crearJSONPorNombre };