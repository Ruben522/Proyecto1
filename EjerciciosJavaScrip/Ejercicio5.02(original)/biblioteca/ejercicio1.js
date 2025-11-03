"use strict";
const alternarVista = (elemento) => {
    elemento.classList.toggle("ocultar");
}

const cambiarVista = (evento) => {
    // Usamos .target para obtener el elemento exacto que fue clicado.
    const elementoClicado = evento.target;

    if (elementoClicado.classList.contains('elemento-impar')) {
        const contenido = elementoClicado.nextElementSibling;
        alternarVista(contenido);
    }
}

export { cambiarVista };