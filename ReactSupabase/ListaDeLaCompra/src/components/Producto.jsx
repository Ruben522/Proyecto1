import React from 'react'
import "./Producto.css";

// Componente que recibe como props los campos de la tabla de productos para crear un producto
const Producto = ({ nombre, precio, peso }) => {
  return (
    <div className='producto'>
      <h2>{nombre}</h2>
      <p><strong>Precio: {precio} €</strong></p>
      <p>Peso: {peso}g</p>
    </div>
  )
}

export default Producto