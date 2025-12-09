import React from "react";
import "./Protagonista.css";

// Componente que muestra la información de un protagonista.
const Protagonista = ({ name, gender, height, mass, hair_color, eye_color }) => {
    return (
        <div className="protagonista-info">
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Género:</strong> {gender}</p>
            <p><strong>Altura:</strong> {height} cm</p>
            <p><strong>Peso:</strong> {mass} kg</p>
            <p><strong>Color de pelo:</strong> {hair_color}</p>
            <p><strong>Color de ojos:</strong> {eye_color}</p>
        </div>
    );
};

export default Protagonista;
