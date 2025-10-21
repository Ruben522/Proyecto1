"use strict"

import { calcularPotencia } from "./biblioteca/calcularPotencia.js"

// Pruebas de la función correcta.
console.log(calcularPotencia(2, 5));
console.log(calcularPotencia(3, 3));
console.log(calcularPotencia(5, 0));

// Pruebas de la función con errores.
console.log(calcularPotencia("hola", 2));
console.log(calcularPotencia(2, "adios"));
console.log(calcularPotencia(2, 6.9));