import React from 'react'
import "./Producto.css";

// Componente que recibe como props los campos de la tabla de productos para crear un producto
const Producto = ({ name, price, weight, image }) => {
  return (
    <div className='producto'>
      <h2>{name}</h2>
      <p><strong>Precio: {price} €</strong></p>
      <p>Peso: {weight}g</p>
      <div className='imagen-producto'>
        <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default Producto