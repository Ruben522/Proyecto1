import React from "react";
import { useNavigate } from "react-router-dom";
import "./AcercaDe.css";

// Componente que muestra la página donde se presenta información sobre la empresa.
const AcercaDe = () => {
	const navigate = useNavigate();
	return (
		<div className="acerca-de">
			<h2>Esta es la página de Acerca De.</h2>
			<button onClick={() => navigate("/")}>Inicio</button>
		</div>
	);
};

export default AcercaDe;
