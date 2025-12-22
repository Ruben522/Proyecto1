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
	const [protagonistaSeleccionado, setProtagonistaSeleccionado] = useState(null);

	const { protagonistas, cargarProtagonistas, error } = useContext(ContextoPeliculas);

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

	useEffect(() => {
		if (characters && characters.length > 0) {
			cargarProtagonistas(characters);
		}
		setProtagonistaSeleccionado(null);
	}, [characters]);

	return (
		<>
			{error && <Error mensaje={error} />}
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
				<ul className="lista-protagonistas">
					{protagonistas.map((characters) => (
						<li
							key={characters.name}
							className="protagonista-nombre"
							onClick={() => seleccionarProtagonista(characters)}
						>
							{characters.name}
						</li>
					))}
				</ul>

				{/* Me comentaste el uso de objeto para no pasar una lista interminable de parámetros, usé esa opción
                al principio, pero le pregunté a la IA si había más formas de hacerlo, me recomendó esta
                y me parece muy cómoda de usar. */}
				{protagonistaSeleccionado && (
					<Protagonista {...protagonistaSeleccionado}
					/>
				)}
			</div>
		</>
	)
};

export default Pelicula;
