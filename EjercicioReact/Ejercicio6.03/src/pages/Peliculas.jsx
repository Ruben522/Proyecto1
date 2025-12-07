import React, { useEffect, useState } from "react";
import { traerDatos } from "../library/TraerDatos";
import Pelicula from "../components/Pelicula";

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
				<Pelicula
					episode_id={peliculaSeleccionada.episode_id}
					title={peliculaSeleccionada.title}
					director={peliculaSeleccionada.director}
					opening_crawl={peliculaSeleccionada.opening_crawl}
					producer={peliculaSeleccionada.producer}
					release_date={peliculaSeleccionada.release_date}
					characters={peliculaSeleccionada.characters}
				/>
			)}
			</div>
		</div>
	);
};

export default Peliculas;
