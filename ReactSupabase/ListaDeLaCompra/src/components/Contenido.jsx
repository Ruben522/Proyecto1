import React from 'react'
import "./Contenido.css"
import Rutas from '../routes/Rutas'
import { Outlet } from 'react-router-dom'

// Este componente contiene el apartado principal de la aplicación (Lista de productos, formularios...)
const Contenido = () => {
  return (
    <div className='contenido'>
      <Rutas />
    </div>
  )
}

export default Contenido