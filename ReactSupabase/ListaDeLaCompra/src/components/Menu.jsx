import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css";
import useSupabaseSesion from "../hooks/useSupabaseSesion.js";

// Componente que contiene los links a las partes de la aplicación.
const Menu = () => {
    const { sesionIniciada } = useSupabaseSesion();
    return (
        <div className='menu-links'>
            <Link className="inicio" to="/">Inicio</Link>
            {sesionIniciada &&
                <Link className="lista" to="/lista">Mi lista</Link>
            }
        </div>
    )
}

export default Menu