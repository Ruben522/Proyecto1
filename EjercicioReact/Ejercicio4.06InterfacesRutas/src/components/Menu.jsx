import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

// Componente que contiene enlaces de navegación dentro de la aplicación.
const Menu = () => {
    return (
        <nav className="menu">
            <Link className="menu-link" to="/">Inicio</Link>
            <Link className="menu-link" to="/productos">Productos</Link>
            <Link className="menu-link" to="/contacto">Contacto</Link>
            <Link className="menu-link" to="/acerca-de">Acerca de</Link>
        </nav>
    );
}
export default Menu;