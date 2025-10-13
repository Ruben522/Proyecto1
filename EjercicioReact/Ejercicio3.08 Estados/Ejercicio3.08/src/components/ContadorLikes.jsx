import React, { useState } from "react";
import "./ContadorLikes.css";

// Componente que muestra un contador de likes y dislikes.
// Tiene una única opción de incremento.
const ContadorLikes = () => {
     
    let contadorInicial = 0;
    const [likes, setLikes] = useState(contadorInicial);
    const [dislikes, setDislikes] = useState(contadorInicial);

    const incrementarLikes = () => setLikes(likes + 1);
    const incrementarDislikes = () => setDislikes(dislikes + 1);

    return (
        <div className="contenedor-contadorLikes">
            <h1>Ejercicio 3 - Contador de “likes”</h1>
            <div className="botones">
            <button onClick={incrementarLikes}>Like</button>
            <button onClick={incrementarDislikes}>Dislike</button>
            </div>
            <p>Numero de likes: {likes}</p>
            <p>Numero de dislikes: {dislikes}</p>
        </div>
    );
};

export default ContadorLikes;
