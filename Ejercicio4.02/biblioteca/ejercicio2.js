"use strict"

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

const esPrimo = (numero) => {
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
};

const resaltarNumeroPrimo = () => {
    let celdas = document.querySelectorAll("td")
    celdas.forEach((celda) => {
        let numero = parseInt(celda.textContent);
        if (esPrimo(numero)){
            celda.classList.add("primo");
        }
    });
};

export { crearTabla, resaltarNumeroPrimo };