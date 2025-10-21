"use strict";
import { useRef } from "react";
import React from "react";
import Contenedor from "./Contenedor";
import "./Pelicula.css";
import Taquilla from "./Taquilla";


// Componente que representa una película:
// Recibe como props: título, dirección, cartel, recaudación, descripción y los intérpretes (children).
const Pelicula = ({ titulo, direccion, cartel, recaudacion, descripcion, children }) => {
	const recaudacionRef = useRef(null);
	const elencoRef = useRef(null);

	// Función para mostrar u ocultar el elenco de la película cambiando el estilo display.
	const mostrarElenco = () => {
		if (elencoRef.current.style.display === "none") {
			elencoRef.current.style.display = "block";
		} else {
			elencoRef.current.style.display = "none";
		}
	};

	// Función para mostrar u ocultar la recaudación de la película cambiando el estilo display.
	const mostrarRecaudacion = () => {
		if (recaudacionRef.current.style.display === "none") {
			recaudacionRef.current.style.display = "block";
		} else {
			recaudacionRef.current.style.display = "none";
		}
	};

	return (
		<div className="pelicula-contenedor">
			<h2 className="pelicula-titulo">{titulo}</h2>
			<p className="pelicula-direccion">Dirigida por: {direccion}</p>
			<img src={cartel} className="pelicula-cartel" />
			<p>{descripcion}</p>
			<div className="botones">
				<button onClick ={() => {
					mostrarElenco();
				}}>Elenco</button>
				<button onClick ={() => {
					mostrarRecaudacion();
				}}>Taquilla</button>
			</div>
			{/* Contenedor del elenco de la película, inicialmente oculto. */}
			<div ref={elencoRef} style={{ display: "none" }}>
				{children}
			</div>

			{/* Contenedor de la recaudación de la película, inicialmente oculto. */}
			<div ref={recaudacionRef} style={{ display: "none" }}>
				<Taquilla recaudacion={recaudacion} />
			</div>
		</div>

	);
};

export default Pelicula;
