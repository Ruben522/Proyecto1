"use strict";
import React from "react";
import "./Contenedor.css";

// Componente se usa como contenedor.
const Contenedor = ({ children }) => {
	return <div className="contenedor">{children}</div>;
};

export default Contenedor;
