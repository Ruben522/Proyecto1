import React, { useState, useEffect, createContext } from "react";
import useAPI from "../hooks/useAPI.js";
import { use } from "react";

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

	const { obtener } = useAPI();

	const obtenerDiscos = async () => {
		try {
			const datos = await obtener(url);
			setDisco(datos);
		} catch (error) {
			setError(`Ha ocurrido un error ${error.message}`);
		}
	};
	useEffect(() => {
		obtenerDiscos();
	}, []);

	const exportar = { disco };

	return <ContextoDiscos value={exportar}>{children}</ContextoDiscos>;
};

export default Proveedor;
export { ContextoDiscos };
