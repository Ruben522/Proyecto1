"use strict"

// Comprueba si el valor recibido es un número.
// Si es un número, indica si es par o impar, positivo o negativo y si es primo o no.
// Si no es un número, muestra un mensaje de error.
function analisisNumerico(numero) {
    if (!isNaN(numero)) {
        console.log(`${numero} es un número.`);
    } else {
        console.log(`${numero} no es un número.`);
        return null
    }

    if (numero % 2 === 0) {
        console.log(`${numero} es par.`);
    } else {
        console.log(`${numero} es impar.`);
    }

    if (numero >= 0) {
        console.log(`${numero} es positivo.`);
    } else {
        console.log(`${numero} es negativo.`);
    }

    if (numero % 2 === 0) {
        console.log(`${numero} es primo.`);
    } else {
        console.log(`${numero} no es primo.`);
    }
}

export { analisisNumerico };