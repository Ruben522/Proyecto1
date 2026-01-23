import React from 'react'
import logo from "../assets/imgs/logo.png"
import { Link } from 'react-router-dom'
import "./Cabecera.css"
import useSupabase from '../hooks/useSupabase'

// Componente que contiene el logo de la web y las rutas para iniciar sesión o registrarse.
// Estas rutas serán sustituidas si estamos logeados, mostrando un botón para cerrar sesión.
const Cabecera = () => {
  const { sesionIniciada, quitarSesion, usuario } = useSupabase();

  return (
    <div className='cabecera'>
      <img src={logo} alt="logo" />
      <h1>Lista de la compra</h1>

      {/* Podría haber hecho una ternaria perfectamente, pero me gusta más así. */}
      {!sesionIniciada &&
        <>
          <Link to="/registro">Registrarse</Link>
          <Link to="/iniciar-sesion">Logearse</Link>
        </>
      }
      {sesionIniciada &&
        <>
          <p>Hola, {usuario.name}</p>
          <button
            onClick={() => {
              quitarSesion()
            }}
            className="quitar-sesion"
          >
            Quitar Sesión
          </button>
        </>
      }
    </div>
  )
}

export default Cabecera