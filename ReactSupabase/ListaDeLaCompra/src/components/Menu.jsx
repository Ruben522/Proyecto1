import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css";

// Componente que contiene los links a las partes de la aplicación.
const Menu = () => {

    return (
        <div className='menu-links'>
            <Link className="inicio" to="/">Inicio</Link>
            <Link className="lista" to="/lista">Mi lista</Link>
            <Link className="crear-producto" to="/crear-producto">Crear Producto</Link>
        </div>
    )
}

export default Menu