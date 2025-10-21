"use strict";

/*
El ejercicio no funciona porque no he sabido hacer
la lógica para cambiar la imagen correctamente.
*/

// Cambia la imagen del carrusel a la siguiente imagen en la lista.
const cambiarImagen = (imagenes, img, posicion) => {
    const nuevaPosicion = (posicion + 1) % imagenes.length;
    img.src = imagenes[nuevaPosicion];
    return nuevaPosicion; 
}

// Inicia el carrusel de imágenes.
const iniciarCarrusel = (imagenes) => {
    let divCarrusel = document.createElement("div");
    let img = document.createElement("img");
    let indiceActual = 0; 

    // img.src es la imagen que se muestra inicialmente.
    img.src = imagenes[indiceActual];
    divCarrusel.appendChild(img);
    document.body.appendChild(divCarrusel);
    
    setInterval(() => {
        indiceActual = cambiarImagen(imagenes, img, indiceActual);
    }, 2000);
};

export { iniciarCarrusel };
