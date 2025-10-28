import React from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Galeria.css";
import peliculasJSON from "./../assets/objetos/peliculas.json";
=======
>>>>>>> 7cc16272918cb577a6819f6f11140ce134a8a33a

// Componente de galería de carteles de películas
// Tiene un submenú a otros componentes que desarrollaremos más adelante.
const Galeria = () => {
<<<<<<< HEAD
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
=======
	return <div></div>;
>>>>>>> 7cc16272918cb577a6819f6f11140ce134a8a33a
};

export default Galeria;
