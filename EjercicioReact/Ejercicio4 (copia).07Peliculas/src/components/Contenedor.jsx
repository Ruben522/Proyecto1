"use strict";
import React from "react";
import "./Contenedor.css";

//Este componente se usa como contenedor de los productos.
const Contenedor = ({ children }) => {
	return <div className="productosContenedor">{children}</div>;
};

export default Contenedor;
