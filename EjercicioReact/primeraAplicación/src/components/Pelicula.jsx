"use strict";
import React from "react";
import Contenedor from "./Contenedor";
import "./Pelicula.css";

//Componente que representa una película:
//Recibe como props: título, dirección, cartel y los intérpretes (children).
const Pelicula = ({ titulo, direccion, cartel, children }) => {
	return (
		<div className="pelicula-contenedor">
			<h2 className="pelicula-titulo">{titulo}</h2>
			<p className="pelicula-direccion">Dirigida por: {direccion}</p>
			<img src={cartel} className="pelicula-cartel" />
			<h3>Elenco</h3>
			{children}
		</div>
	);
};

export default Pelicula;
