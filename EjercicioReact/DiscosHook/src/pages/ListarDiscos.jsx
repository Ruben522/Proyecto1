import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListarDiscos.css";
import useDiscos from "../hooks/useDiscos";
import imgBorrar from "../assets/img/borrar.png";

const ListarDiscos = () => {
	const navigate = useNavigate();
	
	const [textoFiltro, setTextoFiltro] = useState("");
	const {
		discosMostrar,
		discosOriginal,
		borrarDisco,
		filtrarDiscos,
		seleccionarDisco,
		discoSeleccionado,
		setDiscosMostrar,
		cargando
	} = useDiscos();

	return (
		<div className="listado-discos">
			<h2>Listado de Discos</h2>
			{cargando && <p>Cargando discos...</p>}
			{discosMostrar.length === 0 && <p>No hay discos que mostrar.</p>}

			<div className="filtros">
				<input
					type="text"
					placeholder="Filtrar por nombre..."
					value={textoFiltro}
					onChange={(e) => setTextoFiltro(e.target.value)}
				/>
				<button onClick={() => filtrarDiscos(textoFiltro)}>Filtrar</button>
				<button onClick={() => { setTextoFiltro(""); setDiscosMostrar(discosOriginal); }}>Limpiar</button>
			</div>

			<div className="todos-discos">
				{discosMostrar.map((disco) => (
					<div
						key={disco.id}
						className={`disco ${discoSeleccionado === disco.nombre ? "activo" : ""}`}
						onClick={(e) => {
							if (!e.target.classList.contains("borrar") && !e.target.classList.contains("editar-btn")) {
								seleccionarDisco(disco.nombre);
							}
						}}
					>
						<img
							className="borrar"
							src={imgBorrar}
							alt="borrar"
							onClick={() => borrarDisco(disco.id)}
						/>
						<button className="editar-btn" onClick={() =>
							navigate(`/insertar-disco/${disco.id}`)}>
								Editar
						</button>

						<h3>{disco.nombre}</h3>
						{disco.caratula && <img src={disco.caratula} className="caratula" alt="caratula" />}
						<p><strong>Compositor:</strong> {disco.compositor}</p>

						<div className="info-extra">
							<p><strong>Año:</strong> {disco.fecha}</p>
							<p><strong>Géneros:</strong> {disco.generos?.join(", ")}</p>
							<p><strong>Localización:</strong> {disco.localizacion}</p>
							<p><strong>Prestado:</strong> {disco.prestado ? "Sí" : "No"}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListarDiscos;