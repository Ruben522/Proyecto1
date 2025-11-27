"use strict";
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
	genero,
	nota,
	children
}) => {

	return (
		<div className="pelicula-contenedor">
			<h2 className="pelicula-titulo">{titulo}</h2>
			<p className="pelicula-direccion">Dirigida por: {direccion}</p>
			<img src={cartel} className="pelicula-cartel" />
			<p>Género: {genero}</p>
			<p>Recaudación: {recaudacion}</p>
			<p>Nota: {nota}</p>
			<h3>Intérpretes:</h3>
			{children}
		</div>
	);
};

export default Pelicula;
