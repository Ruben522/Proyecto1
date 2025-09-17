"use strict"

let equipoJuan = [89, 120, 103];
let equipoMiguel = [116, 94, 123];

function calcularPuntuacionMedia (equipo) {
    let puntuacion = 0;
    equipo.forEach(element => {
        puntuacion += equipo;
    });
    console.log(puntuacion);
    return puntuacion / equipo.length;
}

function compararPuntuacion (equipo1, equipo2) {
    return equipo1 > equipo2;

}
export {calcularPuntuacionMedia, compararPuntuacion};

console.log(calcularPuntuacionMedia(equipoJuan));
console.log(calcularPuntuacionMedia(equipoMiguel));
