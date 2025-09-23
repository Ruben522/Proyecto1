"use strict";

import { curso, mostrarCurso } from "./Biblioteca/ejercicio1.js";

// Pruebas de la función correcta.
const curso1 = curso("JavaScript", 2024, ["Rubén, Ana"]);
mostrarCurso(curso1);
// Pruebas de la función con errores.
const curso2 = curso(2024);
mostrarCurso(curso2);
