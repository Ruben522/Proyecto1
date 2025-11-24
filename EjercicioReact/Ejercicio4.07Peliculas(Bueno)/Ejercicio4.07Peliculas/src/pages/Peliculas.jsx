import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Peliculas.css";
import peliculasJSON from "./../assets/objetos/peliculas.json";

// Componente de peliculas que muestra una lista de películas con enlaces para sus detalles
const Peliculas = () => {
	const navigate = useNavigate();

	return (
		<div className="peliculas">
			{peliculasJSON.peliculas.length ? (
				peliculasJSON.peliculas.map((elemento) => (
					<div key={elemento.id}>
						<Link to={`/peliculas/peliculadetalle/${elemento.id}`}>
							<p>{elemento.nombre}</p>
							<img src={elemento.cartelera} alt={elemento.nombre} />
						</Link>
					</div>
				))) : (
				<p>No se han encontrado películas.</p>
			)}
			<Outlet />
			<button onClick={() => navigate("/")}>Inicio</button>
		</div>
	);
};

export default Peliculas;
