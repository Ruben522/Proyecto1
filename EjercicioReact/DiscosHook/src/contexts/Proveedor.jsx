import React, { useState, useEffect, createContext } from "react";
import useAPI from "../hooks/useAPI.js";
import Validar from "../components/Validar.jsx";

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

	const [discoForm, setDiscoForm] = useState(valoresIniciales);
	const [discosOriginal, setDiscosOriginal] = useState([]);
	const [discosMostrar, setDiscosMostrar] = useState([]);
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState("");
	const [discoSeleccionado, setDiscoSeleccionado] = useState(null);
	
	const url = "http://localhost:3000/discos";

	const { cargando, obtener, guardar, editarPUT, editarCampo, borrar } =
		useAPI();

	const obtenerDiscos = async () => {
		try {
			const datos = await obtener(url);
			setDiscosOriginal(datos);
			setDiscosMostrar(datos);
		} catch (error) {
			setError(`Ha ocurrido un error al obtener los datos: ${error.message}`);
		}
	};
	useEffect(() => {
		obtenerDiscos();
	}, []);

	const guardarDisco = async (datosDisco) => {
		try {
			const respuesta = await guardar(url, datosDisco);
			setMensaje("Disco guardado correctamente");
			setDiscoForm(valoresIniciales);
			obtenerDiscos();
		} catch (error) {
			setError(`Ha ocurrido un error al guardar el disco: ${error.message}`);
		}
	};


	const borrarDisco = async (id) => {
		try {
			const respuesta = await borrar(`${url}/${id}`);
			setMensaje("Disco borrado correctamente");
			obtenerDiscos();
		} catch (error) {
			setError(`Ha ocurrido un error al borrar el disco: ${error.message}`);
		}
	};

	const modificarDisco = async (id, datosDisco) => {
		try {
			const respuesta = await editarPUT(`${url}/${id}`, datosDisco);
			setMensaje("Disco modificado correctamente");
			setDiscoForm(valoresIniciales);
			obtenerDiscos();
		} catch (error) {
			setError(`Ha ocurrido un error al modificar el disco: ${error.message}`);
		}
	};

	const editarUnCampo = async (id, datosDisco) => {
		try {
			const respuesta = await editarCampo(`${url}/${id}`, datosDisco);
			setMensaje("Disco editado correctamente");
			setDiscoForm(valoresIniciales);
			obtenerDiscos();
		} catch (error) {
			setError(`Ha ocurrido un error al modificar el disco: ${error.message}`);
		}
	};

	const filtrarDiscos = (textoFiltro) => {
		const filtrados = discosOriginal.filter(
			(disco) => disco.nombre === textoFiltro
		);
		setDiscosMostrar(filtrados);
	};

	const limpiarFiltro = () => {
		setDiscosMostrar(discosOriginal);
	};

	const seleccionarDisco = (nombre) => {
		setDiscoSeleccionado(disco => (disco === nombre ? null : nombre));
	};

	const actualizarDato = (evento) => {
		const { name, value } = evento.target;
		setDiscoForm((prevDisco) => ({ ...prevDisco, [name]: value }));
	};

	const actualizarPrestadoCheck = (evento) => {
		const { name, value } = evento.target;
		setDiscoForm((prevDisco) => {
			const nuevoValor = prevDisco[name] === "" ? value : "";
			return { ...prevDisco, [name]: nuevoValor };
		});
	};

	const actualizarGenerosCheck = (evento) => {
		const { value, checked } = evento.target;

		setDiscoForm((seleccionado) => {
			let nuevosGeneros;
			if (checked) {
				nuevosGeneros = [...seleccionado.generos, value];
			} else {
				nuevosGeneros = seleccionado.generos.filter((g) => g !== value);
			}
			return { ...seleccionado, generos: nuevosGeneros };
		});
	};

	const enviarFormulario = async () => {
		setError("");
		setMensaje("");

		const errores = Validar(discoForm);
		if (errores.length > 0) {
			setError(errores.join(" "));
			return;
		}

		// Solo he usado la función de modificarDisco ya que: 
		// 1. No sabía como hacer para diferenciar entre put y patch en este punto.
		// 2. La función de modificarDisco ya funciona correctamente para ambos casos.
		if (discoForm.id) {
			modificarDisco(discoForm.id, discoForm);
		} else {
			guardarDisco(discoForm);
		}
	};

	const limpiarFormulario = () => {
		setDiscoForm(valoresIniciales);
		setMensaje("");
		setError("");
	};

	const cargarDiscoPorId = (id) => {
		const discoEncontrado = discosOriginal.find(disco => disco.id === id);
		if (discoEncontrado) {
			setDiscoForm(discoEncontrado);
		}
	};

	// Estas son las funciones a exportar. Dijiste algo sobre exportar seters,
	// pero sinceramente no recuerdo el porqué era mala práctica.
	const exportar = {
		discosMostrar,
		valoresIniciales,
		discoForm,
		setDiscoForm,
		mensaje,
		error,
		cargando,
		guardarDisco,
		borrarDisco,
		filtrarDiscos,
		limpiarFiltro,
		modificarDisco,
		editarUnCampo,
		discoSeleccionado,
		seleccionarDisco,
		actualizarDato,
		actualizarPrestadoCheck,
		actualizarGenerosCheck,
		enviarFormulario,
		limpiarFormulario,
		cargarDiscoPorId,
	};

	return (
		<ContextoDiscos.Provider value={exportar}>
			{children}
		</ContextoDiscos.Provider>
	);
};

export default Proveedor;
export { ContextoDiscos };
