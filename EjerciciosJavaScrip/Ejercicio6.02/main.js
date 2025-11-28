import {
	traerDatos,
	mostrarPelicula,
	mostrarNombrePeliculas,
} from "./biblioteca/ejercicio1.js";

window.onload = () => {
	const url = "https://swapi.info/api/films";
	const divPeliculas = document.getElementById("peliculas");
	const divInformacion = document.getElementById("informacion");
	const divErrores = document.getElementById("errores");
	let peliculas = [];

	const obtenerYMostrarDatos = async () => {
		try {
			peliculas = await traerDatos(url);
			console.log("todo correcto");
			divPeliculas.innerHTML = mostrarNombrePeliculas(peliculas);
		} catch (error) {
			divErrores.innerHTML = error.message;
		}
	};
	obtenerYMostrarDatos();

	divPeliculas.addEventListener("click", (evento) => {
		if (evento.target.classList.contains("pelicula-nombre")) {
			const idPelicula = evento.target.id;
			console.log(idPelicula);
			divInformacion.innerHTML = mostrarPelicula(peliculas, idPelicula);
		}
	});
};
