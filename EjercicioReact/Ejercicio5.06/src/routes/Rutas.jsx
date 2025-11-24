import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import InsertarDisco from "../pages/InsertarDisco";
import ListarDiscos from "../pages/ListarDiscos";
import Error from "../pages/Error";

// Componente de rutas de la aplicación.
const Rutas = () => {
	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/listar-discos" element={<ListarDiscos />} />
			<Route path="/insertar-disco" element={<InsertarDisco />} />
			/* Ruta para manejar errores en caso de que no se encuentre la página */
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default Rutas;
