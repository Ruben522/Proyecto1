import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import peliculasJSON from "./../assets/objetos/peliculas.json";

// Componente que muestra los detalles de una película que se
// referencia por el id pasado por la URL.
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
            <p>Director: {director}</p>
            <p>Clasificación: {clasificacion}</p>
            <p>Recaudación: {recaudacion}</p>
            <p>Nota: {nota}/10</p>
            <img src={cartelera}/>
            <h3>Intérpretes</h3>
            {actores.map((actor, index) => (
                <div key={index}>
                    <p>{actor.nombre}</p>
                    <p>{actor.fechaNacimiento}</p>
                    <p>{actor.biografia}</p>
                    <img src={actor.imagen} alt={actor.nombre} />
                </div>
            ))}
            <button onClick={() => navigate("/")}>Inicio</button>
        </div>
    );
};

export default PeliculaDetalles;
