"use strict";

// Censura el contenido del texto que se pase por parámetro.
const censurarContenido = (texto) => {
    return texto.replaceAll ('sexo', '<span class="contenido-bloqueado">Contenido Bloqueado</span>');
}

// Muestra en la web el contenido.
const mostrarEnWeb = (texto) => {
    setTimeout(() => {
        document.body.innerHTML = texto;
    }, 2000);
}

export { mostrarEnWeb, censurarContenido };