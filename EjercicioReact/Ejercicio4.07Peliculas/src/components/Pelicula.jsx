"use strict";
import { useRef } from "react";
import React from "react";
import Contenedor from "./Contenedor";
import "./Pelicula.css";
import Taquilla from "./Taquilla";

// Componente que representa una película:
// Recibe como props: título, dirección, cartel, recaudación, descripción y los intérpretes (children).
const Pelicula = ({
	titulo,
	direccion,
	cartel,
	recaudacion,
	descripcion,
	children,
}) => {
	const recaudacionRef = useRef(null);
	const elencoRef = useRef(null);

	// Función para mostrar u ocultar el elenco de la película cambiando el estilo.
	const mostrarElenco = () => {
		elencoRef.current.classList.toggle("ocultar");
	};

	// Función para mostrar u ocultar la recaudación de la película cambiando el estilo.
	const mostrarRecaudacion = () => {
		recaudacionRef.current.classList.toggle("ocultar");
	};

	return (
		<div className="pelicula-contenedor">
			<h2 className="pelicula-titulo">{titulo}</h2>
			<p className="pelicula-direccion">Dirigida por: {direccion}</p>
			<img src={cartel} className="pelicula-cartel" />
			<p>{descripcion}</p>
			<div className="botones">
				<button
					onClick={() => {
						mostrarElenco();
					}}
				>
					Elenco
				</button>
				<button
					onClick={() => {
						mostrarRecaudacion();
					}}
				>
					Taquilla
				</button>
			</div>
			{/* Contenedor del elenco de la película, inicialmente oculto. */}
			<div ref={elencoRef} className="ocultar">
				{children}
			</div>

			{/* Contenedor de la recaudación de la película, inicialmente oculto. */}
			<div ref={recaudacionRef} className="ocultar">
				<Taquilla recaudacion={recaudacion} />
			</div>
		</div>
	);
};

export default Pelicula;
