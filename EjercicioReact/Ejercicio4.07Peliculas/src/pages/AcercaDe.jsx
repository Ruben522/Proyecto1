import React from "react";
import { useNavigate } from "react-router-dom";
import "./AcercaDe.css";

// Componente que muestra información sobre la aplicación y su creador.
const AcercaDe = () => {
	const navigate = useNavigate();
	return (
		<div className="acerca-de">
			<h2>Esta es la aplicación de Rubén, modificada el 28 de marzo de 2025.</h2>
			<button onClick={() => navigate("/")}>Inicio</button>
		</div>
	);
};

export default AcercaDe;
