import React from "react";
import Proveedor from "../context/Proveedor";
import Peliculas from "./Peliculas";

const ProveerPeliculas = () => {
	return (
		<div className="contendor-peliculas">
			<Proveedor>
				<Peliculas />
			</Proveedor>
		</div>
	);
};

export default ProveerPeliculas;
