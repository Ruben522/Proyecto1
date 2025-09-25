"use strict";

import { curso } from "./Biblioteca/ejercicio1.js";
import { mostrarCurso } from "./Biblioteca/ejercicio2.js";
import {
	discente,
	calcularMedia,
	imprimirAficiones,
} from "./Biblioteca/ejercicio3.js";

// Ejercicio 1
// Pruebas de la función correcta.
const curso1 = curso("JavaScript", 2024, "Descripción", ["Rubén, Ana"]);

// Ejercicio 2
mostrarCurso(curso1);

// Ejercico 3
const discente1 = discente(
	1,
	"Rubén",
	"García Fernández",
	["Leer", "Economia"],
	[1, 5, 10]
);
let notas = [5, 1, 10];
console.log(calcularMedia(notas));
console.log(imprimirAficiones(discente1));
