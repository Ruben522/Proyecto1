import React from 'react'
import "./Contenido.css"
import Rutas from '../routes/Rutas'
import ProveedorProductos from '../contexts/ProveedorProductos'

// Este componente contiene el apartado principal de la aplicación (Lista de productos, formularios...)
const Contenido = () => {
  return (
    <div className='contenido'>
      <>
        <ProveedorProductos>
          <Rutas />
        </ProveedorProductos>
      </>
    </div>
  )
}

export default Contenido