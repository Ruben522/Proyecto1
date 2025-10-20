"use strict";
import React from "react";
import "./Interprete.css";

//Componente que representa un intérprete de una película.
//Recibe como props: nombre, foto y la descripción del personaje (children).
const Interprete = ({ nombre, foto, children }) => {
	return (
		<div className="interprete">
			<h2 className="nombre-interprete">{nombre}</h2>
			<img src={foto} className="foto-interprete" />
			<div className="descripcion-interprete">{children}</div>
		</div>
	);
};

export default Interprete;
