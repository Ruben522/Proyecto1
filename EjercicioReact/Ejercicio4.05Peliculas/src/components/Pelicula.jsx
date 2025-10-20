"use strict";
import { useState } from "react";
import React from "react";
import Contenedor from "./Contenedor";
import "./Pelicula.css";
import Taquilla from "./Taquilla";


// Componente que representa una película:
// Recibe como props: título, dirección, cartel y los intérpretes (children).
const Pelicula = ({ titulo, direccion, cartel, recaudacion, children }) => {
	const [mostrarElenco, setMostrarElenco] = useState(false);
	const [mostrarTaquilla, setMostrarTaquilla] = useState(false);

	return (
		<div className="pelicula-contenedor">
			<h2 className="pelicula-titulo">{titulo}</h2>
			<p className="pelicula-direccion">Dirigida por: {direccion}</p>
			<img src={cartel} className="pelicula-cartel" />
			<div className="botones">
				<button onClick={() => setMostrarElenco(!mostrarElenco)}>
					{mostrarElenco ? "Ocultar elenco" : "Mostrar elenco"}
				</button>
				<button onClick={() => setMostrarTaquilla(!mostrarTaquilla)}>
					{mostrarTaquilla ? "Ocultar taquilla" : "Taquilla"}
				</button>
			</div>
			{mostrarElenco && (
				<>
					<h3>Elenco</h3>
					{children}
				</>
			)}

			{mostrarTaquilla && (
				<Taquilla recaudacion={recaudacion} />
			)}

		</div>

	);
};

export default Pelicula;
