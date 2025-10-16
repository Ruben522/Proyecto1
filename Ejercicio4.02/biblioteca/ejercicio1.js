"use strict"

const censurarContenido = (texto) => {
    return texto.replaceAll ('sexo', '<span class="contenido-bloqueado">Contenido Bloqueado</span>');
}

export { censurarContenido };