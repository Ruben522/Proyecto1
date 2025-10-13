import React, { useState } from 'react';
import "./Listado.css";

// Componente que genera y muestra un número aleatorio entre 1 y 100 sin repetidos.
// Tiene opciones de: Incrementar y eliminar todos.
const Listado = () => {

    let numeroInicial = [];
    const [numeros, setNumeros] = useState(numeroInicial);

    const numeroRepetido = (numero) => {
        return numeros.includes(numero);
    };

    const generarNumeroAleatorio = () => {
        if (numeros.length >= 100) return;

        let numero = Math.floor(Math.random() * 100) + 1;
        while (numeroRepetido(numero)) {
            numero = Math.floor(Math.random() * 100) + 1;
        }
        setNumeros([...numeros, numero]);
    };

    // Cambia el valor del estado intercambiando el array con contenido por uno vacío.
    const eliminarNumeros = () => {
        setNumeros([]);
    }

    return (
        <div className="contenedor-listado">
            <h1>Ejercicio 1 - Estado con array</h1>
            <p>
                {numeros.length === 0 ? ("Listado vacio") : (
                    <ul>
                        {numeros.map((numero) => (
                            <li>Numero: {numero}</li>
                        ))}
                    </ul>
                )}
            </p>
            <div className="botones">
                <button onClick={generarNumeroAleatorio}>Generar</button>
                <button onClick={eliminarNumeros} disabled={numeros.length === 0} >Eliminar</button>
            </div></div >
    );
}

export default Listado;