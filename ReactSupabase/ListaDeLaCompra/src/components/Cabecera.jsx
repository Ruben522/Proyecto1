import React from 'react'
//import logo from "../assets/imgs/logo.png"
import { Link } from 'react-router-dom'
import "./Cabecera.css"

// Componente que contiene el logo de la web y las rutas para iniciar sesión o registrarse.
// Estas rutas serán sustituidas si estamos logeados, mostrando un botón para cerrar sesión.
const Cabecera = () => {
  return (
    <div className='cabecera'>
        <h1>Lista de la compra</h1>
        <Link to="/registro">Registrarse</Link>
        <Link to="/iniciar-sesion">Logearse</Link>
    </div>
  )
}

export default Cabecera