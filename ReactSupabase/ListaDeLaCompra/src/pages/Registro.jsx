import React from 'react';
import "./Formulario.css";
import useSesion from "../hooks/useSesion.js";

// Página de registro. Se requiere: nombre, correo y contraseña.
// (AMPLIACIÓN) Si ya hay un correo registrado, se informará al usuario.
const Registro = () => {

  const {
    actualizarDato,
    enviarFormulario,
    limpiarFormulario,
  } = useSesion();
  return (
    <div>
      <h1>Registrarse</h1>
      <form id="formulario" name="formulario">
        <label htmlFor="email">Nombre o usuario</label>
        <input type="text"
          id="name"
          className='name'
          placeholder="Tiburón_Vegano_33"
          onChange={(evento) => {
            actualizarDato(evento);
          }} />

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email"
          id="email"
          className='email'
          placeholder="ejemplo@gmail.com"
          onChange={(evento) => {
            actualizarDato(evento);
          }} />

        <label htmlFor="password">Contraseña</label>
        <input type="password"
          id='password'
          className='password'
          placeholder="Contraseña"
          onChange={() => {
            actualizarDato(evento);
          }} />

        <input type="button"
          value="Registrarme"
          onChange={(evento) => {
            evento.preventDefault();
            enviarFormulario();
            limpiarFormulario();
          }} />
      </form>
    </div>
  )
}

export default Registro