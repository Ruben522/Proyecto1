"use strict";

// Comprueba si el valor recibido es un número y entero.
// Si no se contemplan estas dos condiciones, devuelve null.
function comprobarNumero(numero) {
    if (isNaN(numero)) {
        console.log("No has escrito un número");
        return null;
    }
    if (numero % 1 !== 0) {
        console.log("El número debe ser entero");
        return null;
    }

    return numero;
}

// Comprueba si el operador es válido.
// Si lo es, lo devuelve. Si no, devuelve null.
function comprobarOperador(operador) {
    let operadoresValidos = ["+", "-", "*", "/", "%"];
    for (let i = 0; i < operadoresValidos.length; i++) {
        if (operador === operadoresValidos[i]) {
            return operador;
        }
    }
    console.log("El operador no es correcto. Debe ser +, -, *, / o %");
    return null;
}

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    return numero1 / numero2;
}
function modulo(numero1, numero2) {
    return numero1 % numero2;
}

// Realiza la operación matemática entre los dos números con el operador pasado por parámetro.
// Si uno de los valores no es correcto, devuelve null.
// En caso contrario, muestra el resultado por consola.
function calculadora(numero1, numero2, operador) {
    let num1Validado = comprobarNumero(numero1);
    let num2Validado = comprobarNumero(numero2);
    let operadorValidado = comprobarOperador(operador);

    if (
        num1Validado === null ||
        num2Validado === null ||
        operadorValidado === null
    )
        return null;

    let resultado;
    switch (operadorValidado) {
        case "+":
            resultado = sumar(num1Validado, num2Validado);
            console.log(
                `El resultado de la suma de ${num1Validado} + ${num2Validado} es: ${resultado}`
            );
            break;
        case "-":
            resultado = restar(num1Validado, num2Validado);
            console.log(
                `El resultado de la resta de ${num1Validado} - ${num2Validado} es: ${resultado}`
            );
            break;
        case "*":
            resultado = multiplicar(num1Validado, num2Validado);
            console.log(
                `El resultado de la multiplicación de ${num1Validado} * ${num2Validado} es: ${resultado}`
            );
            break;
        case "/":
            if (num2Validado === 0) {
                console.log("No se puede dividir entre 0");
                break;
            }
            resultado = dividir(num1Validado, num2Validado);
            console.log(
                `El resultado de la división de ${num1Validado} / ${num2Validado} es: ${resultado}`
            );
            break;
        case "%":
            if (num2Validado === 0) {
                console.log("No se puede dividir entre 0");
                break;
            }
            resultado = modulo(num1Validado, num2Validado);
            console.log(
                `El resultado del módulo de ${num1Validado} % ${num2Validado} es: ${resultado}`
            );
            break;
    }
}

export { calculadora };
