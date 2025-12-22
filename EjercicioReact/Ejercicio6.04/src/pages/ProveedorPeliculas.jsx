import React from "react";
import Proveedor from "../context/Proveedor.jsx";
import Peliculas from "./Peliculas.jsx";

const ProveedorPeliculas = () => {
	return (
		<div className="contendor-peliculas">
			<Proveedor>
				<Peliculas />
			</Proveedor>
		</div>
	);
};

export default ProveedorPeliculas;
