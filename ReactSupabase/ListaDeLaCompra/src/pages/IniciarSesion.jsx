import React from 'react'
import "./Formulario.css"

// Página para iniciar sesión. Se requiere correo y contraseña.
// (AMPLIACIÓN) Si no hay usuario, se informará.
const IniciarSesion = () => {
  return (
    <div className='formulario'>
      <h1>Iniciar Sesion</h1>
      <form id="formulario" name="formulario">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email"
          id="email"
          className='email'
          placeholder="ejemplo@gmail.com"
          onChange={(evento) => {
            ActualizarDato(evento);
          }} />

        <label htmlFor="password">Contraseña</label>
        <input type="password"
          id='password'
          className='password'
          placeholder="Contraseña"
          onChange={() => {
            ActualizarDato(evento);
          }} />

        <input type="button"
          value="Iniciar Sesión"
          onChange={(evento) => {
            evento.preventDefault();
            enviarFormulario();
          }} />
      </form>
    </div>
  )
}

export default IniciarSesion