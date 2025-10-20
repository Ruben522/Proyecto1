"use strict";

// Crea una tabla de 10x10 con números del 1 al 100.
const crearTabla = () => {
    let tabla = document.createElement("table");
    let numero = 1;
    for (let i = 0; i < 10; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let celda = document.createElement("td");
            celda.textContent = numero++;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
};

// Verifica si el número es primo.
const esPrimo = (numero) => {
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
};

// Resalta el número que es primo.
const resaltarNumeroPrimo = () => {
    let celdas = document.querySelectorAll("td")
    celdas.forEach((celda) => {
        // Hacemos un parseInt porque el contenido de la celda es un string.
        let numero = parseInt(celda.textContent);
        if (esPrimo(numero)){
            celda.classList.add("primo");
        }
    });
};

// Muestra el resultado en la web después de 2 segundos.
const mostrarNumerosPrimos = () => {
    crearTabla();
    setTimeout(resaltarNumeroPrimo, 2000);
};

export { crearTabla, resaltarNumeroPrimo, mostrarNumerosPrimos };