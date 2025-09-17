"use strict"

function calcularIMC (masa, altura) {
    return masa / (altura * altura);
}

function compararIMC (IMCMarcos, IMCJuan) {
    return IMCMarcos > IMCJuan
}

export {calcularIMC, compararIMC};