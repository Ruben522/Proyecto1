import React from "react";
import "./Contenido.css";
import Rutas from "./../routes/Rutas";

// Componente en el que cargamos las rutas de la aplicación.
// Es el componente que cambia el contenido de la aplicación.
const Contenido = () => {
	return (
		<div className="contenido">
			<Rutas />
		</div>
	);
};

export default Contenido;
