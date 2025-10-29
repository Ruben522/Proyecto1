import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import peliculasJSON from "./../assets/objetos/peliculas.json";

// Componente de galería de carteles de películas
// Tiene un submenú a otros componentes que desarrollaremos más adelante.
const Galeria = () => {
	const navigate = useNavigate();

	return (
		<div className="galeria">
			<h2>Galería</h2>
			{peliculasJSON.peliculas.length ? (
				peliculasJSON.peliculas.map((elemento) => (
					<div key={elemento.id}>
							<img src={elemento.cartelera} alt={elemento.nombre} />
					</div>
				))) : (
				<p>No se han encontrado películas.</p>
			)}
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
