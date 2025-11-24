import React from "react";
import peliculasJSON from "../assets/objetos/peliculas.json";
import { useNavigate } from "react-router-dom";

// Este componente muestra la lista de todos los intérpretes.
const Interpretes = () => {
	const navigate = useNavigate();

	// Esta función la he obtenido de ChatGPT.
	// Sabía que existía, pero no recordaba el nombre.
	// Se hace para "aplanar" un array de arrays en uno solo.
	const todosLosActores = peliculasJSON.peliculas.flatMap(
		(pelicula) => pelicula.actores
	);

	return <div className="interpretes">
		<h2>Lista de Intérpretes</h2>
		{todosLosActores.map((actor, index) => (
			<div key={index}>
				<p>{actor.nombre}</p>
				<p>{actor.fechaNacimiento}</p>
				<p>{actor.biografia}</p>
				<img src={actor.imagen} alt={actor.nombre} />
			</div>
		))}
		<button onClick={() => navigate("/")}>Inicio</button>
	</div>;
};

export default Interpretes;
