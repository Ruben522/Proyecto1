import React from "react";

// Transforma una fecha al formato Español.
const transformarFechaCastellano = (fecha) => {
	return fecha.toLocaleDateString("es-ES");
};

const Pelicula = ({
	episode_id,
	title,
	opening_crawl,
	director,
	producer,
	release_date,
}) => {
	return `<div id="${episode_id}" class="pelicula-informacion">
                <p><strong>Nombre: </strong>${title}</p>
                <p><strong>Sinopsis: </strong>${opening_crawl}</p>
                <p><strong>Director: </strong>${director}</p>
                <p><strong>Productor: </strong>${producer}</p>
                <p><strong>Fecha: </strong>${transformarFechaCastellano(
									new Date(release_date)
								)}</p>
        </div>`;
};

export default Pelicula;
