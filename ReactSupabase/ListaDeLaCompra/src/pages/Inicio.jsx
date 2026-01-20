import React from 'react'
import "./Inicio.css";

// Página de inicio de la aplicación a la que reedigiremos a un usuario que recien se logea.
// (AMPLIACIÓN) Si hay tiempo, mostratemos el nombre de usuario.
const Inicio = () => {
  return (
    <div className='inicio'>
        <h2>Esta es la página de inicio</h2>
        {/* Insertamos aquí el nombre */}
        <p>¿Cómo va tu día?</p>
    </div>
  )
}

export default Inicio