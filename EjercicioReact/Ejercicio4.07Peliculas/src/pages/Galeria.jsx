import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Galeria.css";

const Galeria = () => {
	const navigate = useNavigate();

	return (
		<div className="galeria">
			<h2>Galería</h2>
		<nav>
			<Link to="/galeria/titulo">Títulos</Link>
			<Link to="/galeria/interprete">Intérpretes</Link>
			<Link to="/galeria/director">Directores</Link>
		</nav>
		<Outlet />
		<button onClick={() => navigate("/")}>Inicio</button>
	</div>
	);
};

export default Galeria;
