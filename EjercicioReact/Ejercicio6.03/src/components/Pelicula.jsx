import React, { useEffect, useState } from "react";
import Protagonista from "./Protagonista";
import Error from "../pages/Error";
import "./Pelicula.css";

const transformarFechaCastellano = (fecha) =>
    fecha.toLocaleDateString("es-ES");

const Pelicula = ({
    episode_id,
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    characters
}) => {
    const [protagonistas, setProtagonistas] = useState([]);
    const [protagonistaSeleccionado, setProtagonistaSeleccionado] = useState(null);
	const [error, setError] = useState(null);
	
	const cargarProtagonistas = async () => {
        try {
            const urls = characters.slice(0, 10);

            const promesas = urls.map(async (url) => {
                const respuesta = await fetch(url);
                const datos = await respuesta.json();
                return datos;
            });
            const resultados = await Promise.all(promesas);

            setProtagonistas(resultados);
        } catch (error) {
            setError("Hubo un problema al cargar los protagonistas.");
        }
    };

	// Carga los protagonistas cuando el componente se monta,
	// no antes porque me estaba volviendo loco, siempre estaba vacío.
    useEffect(() => {
		if (!characters || characters.length === 0) return;
        cargarProtagonistas();
    }, [characters]);

    const seleccionarProtagonista = (protagonista) => {
        if (!protagonistaSeleccionado || protagonistaSeleccionado.name !== protagonista.name) {
            setProtagonistaSeleccionado(protagonista);
        } else {
            setProtagonistaSeleccionado(null);
        }
    };
	
	if (error) return <Error error={error} />;

    return (
        <div className="pelicula-informacion" id={episode_id}>
            <p><strong>Nombre: </strong>{title}</p>
            <p><strong>Sinopsis: </strong>{opening_crawl}</p>
            <p><strong>Director: </strong>{director}</p>
            <p><strong>Productor: </strong>{producer}</p>
            <p><strong>Fecha: </strong>{transformarFechaCastellano(new Date(release_date))}</p>

            <h3>Protagonistas</h3>
            <ul className="lista-protagonistas">
                {protagonistas.map((protagonista) => (
                    <li
                        key={protagonista.name}
                        className="protagonista-nombre"
                        onClick={() => seleccionarProtagonista(protagonista)}
                    >
                        {protagonista.name}
                    </li>
                ))}
            </ul>

            {protagonistaSeleccionado && (
                <Protagonista 
                    name={protagonistaSeleccionado.name}
                    gender={protagonistaSeleccionado.gender}
                    height={protagonistaSeleccionado.height}
                    mass={protagonistaSeleccionado.mass}
                    hair_color={protagonistaSeleccionado.hair_color}
                    eye_color={protagonistaSeleccionado.eye_color}
                />
            )}
        </div>
    );
};

export default Pelicula;
