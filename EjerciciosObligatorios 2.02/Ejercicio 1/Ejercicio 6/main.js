"use strict"

import { calculadora } from "./biblioteca/calculadora.js"

// Pruebas de la función correcta.
calculadora(5, 3, "+");
calculadora(10, 4, "-");
calculadora(6, 2, "*");
calculadora(8, 4, "/");
calculadora(10, 3, "%");

// Pruebas de la función con errores.
calculadora(5, "hola", "/");
calculadora(16, 0, "%");
calculadora(5, 3, "feo");
calculadora(19.3, 3, "+");