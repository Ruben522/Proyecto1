import React, { useEffect, useState } from "react";
import { traerDatos } from "../library/TraerDatos";
import Pelicula from "../components/Pelicula";

// Componente que muestra la lista de películas y el detalle de la película seleccionada.
const Peliculas = () => {
	const [peliculas, setPeliculas] = useState([]);
	const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
	const [error, setError] = useState(null);

	const url = "https://swapi.info/api/films";

	const cargarPeliculas = async () => {
		try {
			const datos = await traerDatos(url);
			setPeliculas(datos);
		} catch (error) {
            setError("Hubo un problema al cargar las películas.");
		}
	};

	useEffect(() => {
		cargarPeliculas();
	}, []);

	if (error) return <Error error={error} />;

	return (
		<div className="peliculas-page-container">
			<div className="lista-peliculas">
			<h1>Películas</h1>
			{peliculas.length === 0 && <p>Cargando películas...</p>}
			{peliculas.map((peli) => (
				<p
					key={peli.episode_id}
					className="pelicula-nombre"
					onClick={() => setPeliculaSeleccionada(peli)}
				>
					<strong>Nombre: </strong> {peli.title}
				</p>
			))}
			</div>
			<div className="detalle-seccion">
			{peliculaSeleccionada && (
				<Pelicula pelicula =  {peliculaSeleccionada}/>
			)}
			</div>
		</div>
	);
};

export default Peliculas;
