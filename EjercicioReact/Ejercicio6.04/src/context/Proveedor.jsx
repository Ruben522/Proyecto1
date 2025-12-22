import React, { useState, useEffect, createContext } from "react";
import { traerDatos } from "../library/TraerDatos.js";

const ContextoPeliculas = createContext();

const Proveedor = ({ children }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [protagonistas, setProtagonistas] = useState([]);
	const [error, setError] = useState(null);

	const url = "https://swapi.dev/api/films";

	const cargarPeliculas = async () => {
		try {
			const datos = await traerDatos(url);
			setPeliculas(datos);
		} catch (error) {
			setError("Hubo un problema al cargar las películas.");
		}
	};

	useEffect(() => {
		cargarPeliculas();
	}, []);

	// Esto debe ser una función asincrona. Siempre es undefind porque se carga antes
	// que las películas.
	const traerProtagonistas = (peliculas) => {
		const protagonistas = peliculas.map((pelicula) => pelicula.characters);
		return protagonistas;
	};

	const cargarProtagonistas = async () => {
		try {
			const characters = traerProtagonistas(peliculas);

			const protagonistas = characters.slice(0, 10);

			const promesas = protagonistas.map(async (protagonista) => {
				const respuesta = await fetch(protagonista);
				const datos = await respuesta.json();
				return datos;
			});
			const resultados = await Promise.all(promesas);

			setProtagonistas(resultados);
		} catch (error) {
			setError("Hubo un problema al cargar los protagonistas.");
		}
	};

	// Carga los protagonistas cuando el componente se monta,
	// no antes porque me estaba volviendo loco, siempre estaba vacío.
	useEffect(() => {
		if (!protagonistas || protagonistas.length === 0) return;
		cargarProtagonistas();
	}, [protagonistas]);

	const exportar = { peliculas, protagonistas };

	return <ContextoPeliculas value={exportar}>{children}</ContextoPeliculas>;
};

export default Proveedor;

export { ContextoPeliculas };
