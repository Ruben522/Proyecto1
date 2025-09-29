"use strict";

import { curso } from "./Biblioteca/ejercicio1.js";
import { mostrarCurso } from "./Biblioteca/ejercicio2.js";
import { discente } from "./Biblioteca/ejercicio3.js";
import { mostrarObjeto } from "./Biblioteca/ejercicio5.js";

// Ejercicio 1
const curso1 = curso("JavaScript", 2024, "Descripción");
curso1.alumnado = ["Ruben", "Miriam"];

// Ejercicio 2
mostrarCurso(curso1);

// Ejercico 3
const discente1 = discente();
discente1.imprimirInforme();

// Ejercicio 4
curso1.matricular(discente1);

// Ejercicio 5
mostrarObjeto(curso1);