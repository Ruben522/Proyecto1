import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Peliculas from "../pages/Peliculas";
import Error from "../pages/Error";

// Componente de rutas de la aplicación.
const Rutas = () => {
	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/peliculas" element={<Peliculas />} />
			{/* Ruta para manejar errores en caso de que no se encuentre la página */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default Rutas;
