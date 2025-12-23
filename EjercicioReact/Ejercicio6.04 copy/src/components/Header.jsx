import React from "react";
import "./Header.css";
import Menu from "./Menu";

// Componente que representa la cabecera de la aplicación.
const Header = () => {
	return (
		<div className="header">
			<h1>Star Wars.</h1>
			<Menu />
		</div>
	);
};

export default Header;
