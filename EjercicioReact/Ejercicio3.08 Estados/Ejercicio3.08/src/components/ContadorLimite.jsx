import React, { useState } from "react";
import "./ContadorLimite.css";

// Componente que muestra hasta el número 10 comenzando desde 0.
// Tiene opciones de: Incrementar y decementar. 
const ContadorLimite = () => {

    let contadorInicial = 0;
    let maximo = 10;
    let minimo = 0;
    const [contador, setContador] = useState(contadorInicial);

    const incrementar = () => {
        if (contador < maximo) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > minimo) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="contenedor-contador">
            <h1>Ejercicio 2 - Contador con límites</h1>
            <p className="numero">{contador}</p>
            <div className="botones">
                <button onClick={incrementar} disabled={contador === 10}>
                    Incrementar
                </button>
                <button onClick={decrementar} disabled={contador === 0}>
                    Decrementar
                </button>
                <p>*El máximo es {maximo}*</p>
            </div>
        </div>
    );
};

export default ContadorLimite;
