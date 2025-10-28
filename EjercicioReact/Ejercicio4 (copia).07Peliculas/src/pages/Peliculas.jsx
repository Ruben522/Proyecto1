import React from "react";
import "./Peliculas.css";
import peliculasJSON from "./../assets/objetos/peliculas.json";

// Componente que muestra las peliculas.
const Peliculas = () => {
	return (
		<div className="peliculas">
			{peliculasJSON.peliculas.length
				? peliculasJSON.peliculas.map((elemento) => {
						return <p key={crypto.randomUUID()}>{elemento.}</p>;
				  })
				: "No se han encontrado peliculas."}
		</div>
	);
};

export default Peliculas;
