import React, { useEffect, useState } from "react";
import "./ListarDiscos.css";
import useDiscos from "../hooks/useDiscos";

// Componente para listar, filtrar y borrar discos.
const ListarDiscos = () => {
	const [discosOriginal, setDiscosOriginal] = useState([]);
	const [discosMostrar, setDiscosMostrar] = useState([]);
	const [textoFiltro, setTextoFiltro] = useState("");
	const [discoSeleccionado, setDiscoSeleccionado] = useState(null);

	const { disco } = useDiscos();

	// Cada vez que se borre un disco, actualizamos la lista.
	useEffect(() => {
		setDiscosMostrar(disco);
	}, [discosOriginal]);

	const filtrar = () => {
		let nombreFiltro = textoFiltro;
		let arrayFiltrado = [];

		for (let i = 0; i < discosOriginal.length; i++) {
			let disco = discosOriginal[i];
			if (disco.nombre === nombreFiltro) {
				arrayFiltrado = [...arrayFiltrado, disco];
			}
		}

		setDiscosMostrar(arrayFiltrado);
	};

	const limpiar = () => {
		setTextoFiltro("");
		setDiscosMostrar(discosOriginal);
	};

	const borrarDisco = (nombre) => {
		const nuevos = discosOriginal.filter((d) => d.nombre !== nombre);
		setDiscosOriginal(nuevos);
		localStorage.setItem("discos", JSON.stringify(nuevos));
	};

	const seleccionarDisco = (nombre) => {
		if (discoSeleccionado === nombre) {
			setDiscoSeleccionado(null);
		} else {
			setDiscoSeleccionado(nombre);
		}
	};

	return (
		<div className="listado-discos">
			<h2>Listado de Discos</h2>
			<div className="filtros">
				<input
					type="text"
					placeholder="Filtrar por nombre..."
					value={textoFiltro}
					onChange={(evento) => setTextoFiltro(evento.target.value)}
				/>
				<button onClick={() => filtrar()}>Filtrar</button>
				<button onClick={() => limpiar()}>Limpiar</button>
			</div>
			<div className="todos-discos">
				<h3>Todos los Discos</h3>
				{discosOriginal.map((disco, indice) => (
					<div key={indice} className="disco">
						<h3>{disco.nombre}</h3>
						{disco.caratula && (
							<img src={disco.caratula} className="caratula" />
						)}
						<p>
							<strong>Compositor:</strong> {disco.compositor}
						</p>
						<div className="info-extra">
							<p>
								<strong>Año:</strong> {disco.fecha}
							</p>
							<p>
								<strong>Géneros:</strong> {disco.generos.join(", ")}
							</p>
							<p>
								<strong>Localización:</strong> {disco.localizacion}
							</p>
							<p>
								<strong>Prestado:</strong> {disco.prestado ? "Sí" : "No"}
							</p>
						</div>
					</div>
				))}
			</div>
			{discosMostrar.map((disco, indice) => (
				<div
					key={indice}
					className={`disco ${
						discoSeleccionado === disco.nombre ? "activo" : ""
					}`}
					onClick={(evento) => {
						if (!evento.target.classList.contains("borrar")) {
							seleccionarDisco(disco.nombre);
						}
					}}
				>
					<img
						className="borrar"
						src="../assets/img/borrar.png"
						onClick={() => borrarDisco(disco.nombre)}
					/>
					<h3>{disco.nombre}</h3>
					{disco.caratula && <img src={disco.caratula} className="caratula" />}
					<p>
						<strong>Compositor:</strong> {disco.compositor}
					</p>
					<div className="info-extra">
						<p>
							<strong>Año:</strong> {disco.fecha}
						</p>
						<p>
							<strong>Géneros:</strong> {disco.generos.join(", ")}
						</p>
						<p>
							<strong>Localización:</strong> {disco.localizacion}
						</p>
						<p>
							<strong>Prestado:</strong> {disco.prestado ? "Sí" : "No"}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListarDiscos;
