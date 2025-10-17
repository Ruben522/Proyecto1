"use strict";

import { censurarContenido } from "./biblioteca/ejercicio1.js";
import { crearTabla, resaltarNumeroPrimo } from "./biblioteca/ejercicio2.js";
import {
	crearParrafos,
	cambiarAleatoriamente,
} from "./biblioteca/ejericio3.js";

setTimeout(() => {
	let cuerpo = document.body.innerHTML;
	let cuerpoCensurado = censurarContenido(cuerpo);

	document.body.innerHTML = cuerpoCensurado;
}, 2000);

crearTabla();

setTimeout(() => {
	resaltarNumeroPrimo();
}, 2000);

crearParrafos();
cambiarAleatoriamente();
