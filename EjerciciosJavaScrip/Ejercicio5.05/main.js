"use strict";

"use strict";

import {
    recogerDatosFormulario,
    validarFormulario,
    guardarDiscoJSON,
    tieneErrores,
    limpiarInformacion,
    mostrarInformacion
} from "./biblioteca/ejercicio1.js";

const formulario = document.getElementById("formu");
const informacion = document.getElementById("informacion");
const btnGuardar = document.getElementById("guardar");

btnGuardar.addEventListener("click",
	(evento) => {
    const datos = recogerDatosFormulario(formulario);
    let errores = validarFormulario(datos);

    limpiarInformacion(informacion);

    if (!tieneErrores(errores)) {
		let mensaje = "Todo correcto";
        let discoJSON = guardarDiscoJSON(datos);
        console.log("Guardado como JSON:", discoJSON);
		mostrarInformacion(informacion, mensaje);

    } else {
		mostrarInformacion(informacion, errores);
	}
});


