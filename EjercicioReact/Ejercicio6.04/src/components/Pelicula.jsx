import React, { useContext, useEffect, useState } from "react";
import Protagonista from "./Protagonista";
import { ContextoPeliculas } from "../context/Proveedor.jsx";
import Error from "../pages/Error";
import "./Pelicula.css";

// Transforma una fecha a formato castellano.
const transformarFechaCastellano = (fecha) => fecha.toLocaleDateString("es-ES");

// Componente que muestra la información de una película y sus protagonistas.
const Pelicula = ({
	episode_id,
	title,
	opening_crawl,
	director,
	producer,
	release_date,
	characters,
}) => {
	const [protagonistaSeleccionado, setProtagonistaSeleccionado] =
		useState(null);

	const { protagonistas } = useContext(ContextoPeliculas);
	const seleccionarProtagonista = (protagonista) => {
		if (
			!protagonistaSeleccionado ||
			protagonistaSeleccionado.name !== protagonista.name
		) {
			setProtagonistaSeleccionado(protagonista);
		} else {
			setProtagonistaSeleccionado(null);
		}
	};

	//if (error) return <Error error={error} />;

	return (
		<div className="pelicula-informacion" id={episode_id}>
			<p>
				<strong>Nombre: </strong>
				{title}
			</p>
			<p>
				<strong>Sinopsis: </strong>
				{opening_crawl}
			</p>
			<p>
				<strong>Director: </strong>
				{director}
			</p>
			<p>
				<strong>Productor: </strong>
				{producer}
			</p>
			<p>
				<strong>Fecha: </strong>
				{transformarFechaCastellano(new Date(release_date))}
			</p>

			<h3>Protagonistas</h3>
			{console.log(protagonistas)}

			<ul className="lista-protagonistas">
				{protagonistas.map((characters) => (
					<li
						key={characters.name}
						className="protagonista-nombre"
						onClick={() => seleccionarProtagonista(characters)}
					>
						{console.log(protagonistas)}
						{console.log(characters)}
						{characters.name}
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
