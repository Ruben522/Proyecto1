import React, { useState, useEffect, createContext } from "react";
import { traerDatos } from "./data/TraerDatos.js";

const ContextoPeliculas = createContext();
 
const Proveedor = ({ children }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [protagonistas, setProtagonistas] = useState([]);
	const [vehiculos, setVehiculos] = useState([]);
	const [peliculaSeleccionada, setPeliculaSeleccionada] = useState([]);

	const [error, setError] = useState(null);

	const url = "https://swapi.py4e.com/api/films/";

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

	const traerVehiculos = async (urls) => {
		const promesas = urls.map((url) => traerDatos(url));
		const resultados = await Promise.allSettled(promesas);
		return resultados
			.filter((p) => p.status === "fulfilled")
			.map((p) => p.value);
	};

	const traerProtagonistas = async (urls) => {
		const diezPrimeros = urls.slice(0, 10);
		const promesas = diezPrimeros.map((url) => traerDatos(url));
		const resultados = await Promise.allSettled(promesas);
		return resultados
			.filter((p) => p.status === "fulfilled")
			.map((p) => p.value);
	};

	const cargarProtagonistas = async (urls) => {
		try {
			const datosActores = await traerProtagonistas(urls);
			setProtagonistas(datosActores);
		} catch (err) {
			setError(`Error al cargar protagonistas: ${err.message}`);
		}
	};

	const cargarVehiculos = async (urls) => {
		try {
			const datosVehiculos = await traerVehiculos(urls);
			setVehiculos(datosVehiculos);
		} catch (err) {
			setError(`Error al cargar vehículos: ${err.message}`);
		}
	};

	const exportar = { peliculas, protagonistas, vehiculos, cargarProtagonistas, cargarVehiculos, error };

	return <ContextoPeliculas value={exportar}>{children}</ContextoPeliculas>;
};

export default Proveedor;

export { ContextoPeliculas };
