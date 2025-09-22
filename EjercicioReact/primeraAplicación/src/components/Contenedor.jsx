"use strict";
import React from "react";
import "./Contenedor.css";

//Este componente se usa como contenedor de las películas.
const Contenedor = ({ children }) => {
	return <div className="peliculasContenedor">{children}</div>;
};

export default Contenedor;
