import React, { useState, useEffect, createContext } from "react";
import { traerDatos } from "../library/TraerDatos.js";

const ContextoPeliculas = createContext();

const Proveedor = ({ children }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [protagonistas, setProtagonistas] = useState([]);
	const [error, setError] = useState(null);

	const url = "https://swapi.info/api/films";

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

	const cargarProtagonistas = async () => {
		try {
			// Anteiormente usaba un blucle for, pero me parecía que había algún método para coger
			// solo 10 y chatgpt me sugirió este método con slice.
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
		if (!characters || characters.length === 0) return;
		cargarProtagonistas();
	}, [characters]);

	const exportar = { peliculas, protagonistas };

	return <ContextoPeliculas value={exportar}>{children}</ContextoPeliculas>;
};

export default Proveedor;

export { ContextoPeliculas };
