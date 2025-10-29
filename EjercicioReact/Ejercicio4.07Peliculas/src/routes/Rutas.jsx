import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Peliculas from "../pages/Peliculas";
import Interpretes from "../pages/Interpretes";
import Galeria from "../pages/Galeria";
import AcercaDe from "../pages/AcercaDe";
import Error from "../pages/Error";

// Componente de rutas de la aplicación.
const Rutas = () => {
	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/peliculas" element={<Peliculas />} />
			<Route path="/interpretes" element={<Interpretes />} />
			<Route path="/galeria" element={<Galeria />} >
			/* Subrutas para la galería */
				<Route path="titulo" element={<TitulosGaleria />} />
				<Route path="interprete" element={<InterpretesGaleria />} />
				<Route path="director" element={<DirectoresGaleria />} />
			</Route>
			<Route path="/acerca-de" element={<AcercaDe />} />
			/* Ruta para manejar errores en caso de que no se encuentre la página */
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default Rutas;
