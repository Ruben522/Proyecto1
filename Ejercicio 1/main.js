"use strict"

import { devolverMesIgualANumero } from "./biblioteca/devolverMeses.js"

// Pruebas de la función correcta.
console.log(devolverMesIgualANumero(1));
console.log(devolverMesIgualANumero(5));
console.log(devolverMesIgualANumero(12));

// Pruebas de la función con errores.
console.log(devolverMesIgualANumero("hola"));
console.log(devolverMesIgualANumero(13));