"use strict";

const imagenesAleatorio = (imagenes) => {
    let copia = [...imagenes];
    copia.sort(() => Math.random() - 0.5);
    return copia;
};

const crearPanel = (arrayImagenes) => {
    const panel = document.getElementById("piezas");
    for (let i = 0; i < arrayImagenes.length; i++) {
        let img = document.createElement("img");
        img.src = arrayImagenes[i];
        img.classList.add("arrastable");
        img.id = "pieza-" + i;
        panel.appendChild(img);
    }
};

const construirTablero = (alto, ancho) => {
    const tablero = document.getElementById("tablero");
    const tabla = document.createElement("table");
    for (let i = 0; i < alto; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < ancho; j++) {
            const celda = document.createElement("td");
            celda.classList.add("soltable");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla);
};

const reiniciar = (panel, tablero) => {
    panel.innerHTML = "";
    tablero.innerHTML = "";
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "none";
};

const dragAndDrop = () => {
    const piezas = document.getElementsByClassName("arrastable");
    for (let i = 0; i < piezas.length; i++) {
        piezas[i].setAttribute("draggable", true);
    }
};

const mensajePuzzleCompletado = () => {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";
};

export {
    imagenesAleatorio,
    crearPanel,
    construirTablero,
    reiniciar,
    dragAndDrop,
    mensajePuzzleCompletado
};
