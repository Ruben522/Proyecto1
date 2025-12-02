import React, { useEffect, useState } from "react";
import Pelicula from "../components/Pelicula";
import { traerDatos } from "../library/TraerDatos";
import "./Peliculas.css";

const Peliculas = () => {
	const [peliculas, setPeliculas] = useState([]);
	const [residentes, setResidentes] = useState([]);
	const url = "https://swapi.info/api/films";

	useEffect(() => {
		traerDatos(url);
	}, []);

	return (
		<div>
			Peliculas:
			<Pelicula />
		</div>
	);
};

export default Peliculas;
