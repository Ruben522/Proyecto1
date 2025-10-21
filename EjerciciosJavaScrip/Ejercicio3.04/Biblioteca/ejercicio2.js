"use strict";

// Genera un número aleatorio entre 1 y 10.
const generarNumeroAleatorio1a10 = () => {
    return Math.floor(Math.random() * 10) + 1;
};

// Genera un array de 10 números aleatorios entre 1 y 10.
const generarArrayAleatorio = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = generarNumeroAleatorio1a10();
    }
    return array;
};


// Devuelve un array con los números mayores a 5 de otros arrays.
const arrayNumerosMayor5 = (...array) => {
    return array.filter(num => num > 5);
}

export { generarNumeroAleatorio1a10, generarArrayAleatorio, arrayNumerosMayor5 };