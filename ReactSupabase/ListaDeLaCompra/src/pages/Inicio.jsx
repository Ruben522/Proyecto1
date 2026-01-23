import React from 'react'
import "./Inicio.css";
import useSupabase from "../hooks/useSupabase.js";
// Página de inicio de la aplicación a la que reedigiremos a un usuario que recien se logea.
const Inicio = () => {

  const { usuario } = useSupabase();

  return (
    <div className="inicio">
      <h2>Esta es la página de inicio</h2>
      {console.log(usuario.name)}
      {usuario.name && (
        <p>¿Cómo va tu día {usuario.name}?</p>
      )}
    </div>
  )
}

export default Inicio