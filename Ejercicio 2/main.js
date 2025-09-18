"use strict"

import { analisisNumerico } from "./biblioteca/comprobarNumeros.js"

// Pruebas de la función correcta.
analisisNumerico(10);
analisisNumerico(7);
analisisNumerico(-3);
analisisNumerico(-6);

// Pruebas de la función con errores.
analisisNumerico("hola");
