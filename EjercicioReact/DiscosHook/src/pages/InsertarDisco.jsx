import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Errores from "../components/Errores.jsx";
import "./InsertarDisco.css";
import useDiscos from "../hooks/useDiscos.js";

// Componente del formulario para insertar un disco.
const FormularioDisco = () => {
	const { id } = useParams();

	const {
		discoForm,
		actualizarDato,
		actualizarPrestadoCheck,
		actualizarGenerosCheck,
		enviarFormulario,
		error,
		mensaje,
		limpiarFormulario,
		cargarDiscoPorId,
	} = useDiscos();

	// He puesto el id en las dependencias para que cuando cambie sin haber editado
	// nada, se cambie por el otro disco o se limpie. Me ha dado muchos problemas.
	useEffect(() => {
		if (id) {
			cargarDiscoPorId(id);
		}
	}, [id]);

	return (
		<>
			<div className="App-header">
				<h2>Formulario de Discos</h2>
				<div className="formulario">
					<form id="formu" name="formu">
						<label htmlFor="nombre">Nombre del disco: </label>
						<input
							type="text"
							id="nombre"
							name="nombre"
							placeholder="Nombre del disco..."
							value={discoForm.nombre || ""}
							onChange={actualizarDato}
						/>
						<label htmlFor="caratula">Carátula: </label>
						<input
							type="url"
							id="caratula"
							name="caratula"
							placeholder="url de la carátula..."
							value={discoForm.caratula || ""}
							onChange={actualizarDato}
						/>
						<label htmlFor="compositor">Grupo de música o intérprete: </label>
						<input
							type="text"
							id="compositor"
							name="compositor"
							placeholder="Grupo o intérprete de la canción..."
							value={discoForm.compositor || ""}
							onChange={actualizarDato}

						/>
						<label htmlFor="fecha">Año de publicación: </label>
						<input
							type="number"
							id="fecha"
							name="fecha"
							placeholder="Año de publicación de la canción..."
							value={discoForm.fecha || ""}
							onChange={actualizarDato}
						/>
						<div className="generos" id="generos">
							Géneros de música a los que pertenece:
							<label htmlFor="rock">Rock</label>
							<input
								type="checkbox"
								id="rock"
								name="generos"
								value="rock"
								checked={discoForm.generos.includes("rock")}
								onChange={actualizarGenerosCheck}
							/>
							<label htmlFor="jazz">Jazz</label>
							<input
								type="checkbox"
								id="jazz"
								name="generos"
								value="jazz"
								checked={discoForm.generos.includes("jazz")}
								onChange={actualizarGenerosCheck}
							/>
							<label htmlFor="funk">Funk</label>
							<input
								type="checkbox"
								id="funk"
								name="generos"
								value="funk"
								checked={discoForm.generos.includes("funk")}
								onChange={actualizarGenerosCheck}
							/>
							<label htmlFor="hip-hop">Hip-hop</label>
							<input
								type="checkbox"
								id="hip-hop"
								name="generos"
								value="hip-hop"
								checked={discoForm.generos.includes("hip-hop")}
								onChange={actualizarGenerosCheck}
							/>
							<label htmlFor="house">House</label>
							<input
								type="checkbox"
								id="house"
								name="generos"
								value="house"
								checked={discoForm.generos.includes("house")}
								onChange={actualizarGenerosCheck}
							/>
						</div>
						<label htmlFor="localizacion">Localización: </label>
						<input
							type="text"
							id="localizacion"
							name="localizacion"
							placeholder="¿Dónde está guardado?"
							value={discoForm.localizacion || ""}
							onChange={actualizarDato}
						/>

						<label htmlFor="prestado">¿Lo hemos prestado?</label>
						<input
							type="checkbox"
							id="prestado"
							name="prestado"
							value="sí"
							checked={discoForm.prestado === "sí"}
							onChange={actualizarPrestadoCheck}
						/>

						<input
							type="button"
							id="guardar"
							value={discoForm.id ? "Actualizar Datos" : "Guardar"}
							onClick={enviarFormulario}
						/>

						<input
							type="button"
							id="limpiar"
							value="Limpiar"
							onClick={limpiarFormulario}
						/>
					</form>
				</div>
				<div id="informacion" className="informacion">
					<Errores error={error} mensaje={mensaje} />
				</div>
				<br />
			</div>
		</>
	);
};

export default FormularioDisco;
