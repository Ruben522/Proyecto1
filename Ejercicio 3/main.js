"use strict"

import { mostrarMultiplosDeTres } from "./biblioteca/numeroMultiplos3.js"

// Pruebas de la función correcta.
console.log(mostrarMultiplosDeTres(10));
console.log(mostrarMultiplosDeTres(15));
console.log(mostrarMultiplosDeTres(30));

// Pruebas de la función con errores.
console.log(mostrarMultiplosDeTres("hola"));
console.log(mostrarMultiplosDeTres(-5));