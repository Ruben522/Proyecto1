import React, { useContext, useEffect, useState } from "react";
import Pelicula from "../components/Pelicula";
import { ContextoPeliculas } from "../context/Proveedor.jsx";

// Componente que muestra la lista de películas y el detalle de la película seleccionada.
const Peliculas = () => {
	const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

	const { peliculas, protagonistas } = useContext(ContextoPeliculas);

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
