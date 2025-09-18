"use strict"

// Comprueba si el valor recibido es un número y positivo.
// Si no se contemplan estas dos condiciones, devuelve null.
function comprobarNumero(numero) {
    if (isNaN(numero)) {
        console.log("No has escrito un número");
        return null
    }
    if (numero < 0) {
        console.log("El número debe ser positivo");
        return null
    }
    return numero;
}

// Muestra por consola todos los múltiplos de 3 que hay entre 0 y el número introducido.
// Si el número no es válido, devuelve null.
function mostrarMultiplosDeTres (numero) {
    let numeroValidado = comprobarNumero(numero);
    if (numeroValidado === null) return null;

    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

export { mostrarMultiplosDeTres };