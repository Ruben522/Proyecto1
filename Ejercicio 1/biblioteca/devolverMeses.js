"use strict"

function delvolerMesIgualANumero (numero) {
    //comprobarNumero(numero)
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let mesElegido = "";
    for (let i = 0; i < meses.length; i++) {
        if (numero === meses[i]) {
            mesElegido = meses[i];
            break;
        }
    }
    return mesElegido;
}

export {delvolerMesIgualANumero};