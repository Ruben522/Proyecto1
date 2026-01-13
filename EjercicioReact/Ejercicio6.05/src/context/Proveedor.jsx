import React, { useState, useEffect, createContext } from "react";
import useAPI from "../hooks/useAPI.js";

const ContextoDiscos = createContext();

const Proveedor = ({ children }) => {
	const valoresIniciales = {
		nombre: "",
		caratula: "",
		compositor: "",
		fecha: "",
		localizacion: "",
		prestado: "",
		generos: [],
	};

	const [disco, setDisco] = useState(valoresIniciales);
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState("");

	const url = "http://localhost:3000/discos";

	const { obtener, guardar } = useAPI();

	const obtenerDiscos = async () => {
		try {
			const datos = await obtener(url);
			setDisco(datos);
		} catch (error) {
			setError(`Ha ocurrido un error ${error.message}`);
		}
	};

	const actualizarDato = (evento) => {
		const { name, value } = evento.target;
		setDisco((prevDisco) => ({ ...prevDisco, [name]: value }));
	};

	const actualizarPrestadoCheck = (evento) => {
		const { name, value } = evento.target;
		setDisco((prevDisco) => {
			const nuevoValor = prevDisco[name] === "" ? value : "";
			return { ...prevDisco, [name]: nuevoValor };
		});
	};

	const actualizarGenerosCheck = (evento) => {
		const { value, checked } = evento.target;

		setDisco((seleccionado) => {
			let nuevosGeneros;
			if (checked) {
				nuevosGeneros = [...seleccionado.generos, value];
			} else {
				nuevosGeneros = seleccionado.generos.filter((g) => g !== value);
			}
			return { ...seleccionado, generos: nuevosGeneros };
		});
	};

	const guardarDisco = () => {
		setError("");
		setMensaje("");

		const errores = Validar(disco);

		if (errores.length > 0) {
			setError(errores.join(" "));
			return;
		}

		let discos = JSON.parse(localStorage.getItem("discos")) || [];

		const nuevoDisco = {
			nombre: disco.nombre,
			compositor: disco.compositor,
			fecha: disco.fecha,
			generos: disco.generos,
			localizacion: disco.localizacion,
			caratula: disco.caratula,
			prestado: disco.prestado === "sí",
		};

		discos = [...discos, nuevoDisco];
		localStorage.setItem("discos", JSON.stringify(discos));

		setMensaje("Todo correcto. Disco guardado.");
		setDisco(valoresIniciales);
	};

	const exportar = {
		disco,
		obtenerDiscos,
		mensaje,
		error,
		actualizarDato,
		actualizarGenerosCheck,
		actualizarPrestadoCheck,
		guardarDisco,
	};

	return <ContextoDiscos value={exportar}>{children}</ContextoDiscos>;
};

export default Proveedor;
export { ContextoDiscos };
