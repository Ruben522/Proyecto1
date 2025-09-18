"use strict"

// Comprueba si el valor recibido es un número. Debuelve true o false.
function comprobarNumero(numero) {
    return !isNaN(numero);
}

// Comprueba que el número esté en el rango correcto, si es así lo devuelve. 
// Si no lo es, muestra un mensaje y devuelve null.
function comprobarRango1A12(numero) {
    if (!comprobarNumero(numero)) {
        console.log("No has escrito un número.")
        return null;
    }

    if (numero < 1 || numero > 12) {
        console.log("EL rango no es correcto. Debe ser entre 1 y 12.");
        return null;
    }

    return numero;
}

// Devuelve el nombre del mes correspondiente al número introducido. 
// Si el número no es válido, devuelve null.
function devolverMesIgualANumero(numero) {
    let numeroValidado = comprobarRango1A12(numero)
    if (numeroValidado === null) return null;

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mesElegido = meses[numero - 1];
    return mesElegido;
}

export { devolverMesIgualANumero};