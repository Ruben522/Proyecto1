"use strict";

// Recorre un objeto y muestra por consola cada clave, su valor y el tipo de dato.
const mostrarObjeto = (objeto) => {
    for (let clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            const valor = objeto[clave];
            
            if (Array.isArray(valor)) {
                valor.forEach((valor) => {
                    console.log(
                    `La clave es ${clave} y el valor es ${valor} y es del tipo ${typeof valor}`);
                });

            } else {
                console.log(
                    `La clave es ${clave} y el valor es ${valor} y es del tipo ${typeof valor}`
                );
            }
        }
    }
};

export { mostrarObjeto };