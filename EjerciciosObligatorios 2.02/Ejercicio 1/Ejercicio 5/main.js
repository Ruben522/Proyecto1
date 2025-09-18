"use strict"

import { calcularMedia } from "./biblioteca/calcularMedia.js"

// Pruebas de la función correcta.
console.log(calcularMedia([5, 10, 15, 6, 20, 1]));
console.log(calcularMedia([20, 30, 40]));
console.log(calcularMedia([0, 0, 0, 0]));

// Pruebas de la función con errores.
console.log(calcularMedia("hola"));
console.log(calcularMedia([]));
console.log(calcularMedia([5, -1, 15]));
