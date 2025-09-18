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

// Calcula la media de un array de números positivos.
// Si alguno no es válido, devuelve null.
function calcularMedia (numeros) {
    if (numeros.length === 0) {
        console.log("El array está vacío");
        return;
    }

    for (let i = 0; i < numeros.length; i++) {
        if (comprobarNumero(numeros[i]) === null) return null;
    }

    let sumaTotal = 0;
    for (let i = 0; i< numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return sumaTotal / numeros.length;
}

export { calcularMedia };