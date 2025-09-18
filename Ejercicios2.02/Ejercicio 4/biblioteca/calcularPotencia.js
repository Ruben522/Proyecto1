"use strict"

// Comprueba si el valor recibido es un número y entero.
// Si no se contemplan estas dos condiciones, devuelve null.
function comprobarNumero(numero) {
    if (isNaN(numero)) {
        console.log("No has escrito un número");
        return null
    }
    if (numero % 1 !== 0) {
        console.log("El número debe ser entero");
        return null;
    }

    return numero;
}

// Calcula la potencia de un número elevado a otro.
// Si los números son válidos, devuelve el resultado con un mensaje por consola.
// Si uno de los números no es válido, devuelve null.
function calcularPotencia(base, exponente) {
    let baseValidada = comprobarNumero(base);
    let exponenteValidado = comprobarNumero(exponente);

    if (baseValidada === null) return

    if (exponenteValidado === null) return

    let resultado = 1;
    let indice = 0;
    while (indice !== exponenteValidado) {
        resultado *= baseValidada;
        indice++;
    }
    return (`${baseValidada} elevado a ${exponenteValidado} es ${resultado}`);
}

export { calcularPotencia };