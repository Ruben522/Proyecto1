import React, { useContext } from "react";
import { ContextoDiscos } from "../contexts/Proveedor.jsx";

const useDiscos = () => {
	/**
	 * Hook personalizado para consumir el contexto de Discos de forma segura.
	 * Lanza un error si se intenta usar fuera de su proveedor.
	 */
	const contexto = useContext(ContextoDiscos);

	if (!contexto) {
		throw new Error(
			`El hook useDiscos debe ser utilizado dentro de <Proveedor>.`
		);
	}

	return contexto;
};

export default useDiscos;
