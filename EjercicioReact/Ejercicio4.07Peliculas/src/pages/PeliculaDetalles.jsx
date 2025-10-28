import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import peliculasJSON from "./../assets/objetos/peliculas.json";

const PeliculaDetalles = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const peliculaFiltrada = peliculasJSON.peliculas.filter((valor) => {
        return valor.id === parseInt(id);
    });

    const { nombre, director, cartelera, recaudacion, clasificacion, nota, actores } = peliculaFiltrada[0];
    return (
        <div className="pelicula-detalles">
            <h2>{nombre}</h2>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Clasificación:</strong> {clasificacion}</p>
            <p><strong>Recaudación:</strong> {recaudacion}</p>
            <p><strong>Nota:</strong> {nota}/10</p>
            <img src={cartelera} alt={nombre} width="250" />
            <h3>Intérpretes</h3>
            <ul>
                {actores.map((actores, index) => (
                    <li key={index}>{actores.nombre}</li>
                ))}
            </ul>
            <button onClick={() => navigate("/")}>Inicio</button>
        </div>
    );
};

export default PeliculaDetalles;
