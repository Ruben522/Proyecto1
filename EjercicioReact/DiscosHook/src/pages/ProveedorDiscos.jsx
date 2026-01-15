import React from "react";
import Proveedor from "../context/Proveedor.jsx";
import InsertarDisco from "../pages/InsertarDisco.jsx";
import ListarDiscos from "../pages/ListarDiscos.jsx";

const ProveedorDiscos = () => {
	return (
		<div className="proveedor-discos">
			<Proveedor>
				<InsertarDisco />
				<ListarDiscos />
			</Proveedor>
		</div>
	);
};

export default ProveedorDiscos;
