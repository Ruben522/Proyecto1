import React from 'react'
import Producto from "./Producto.jsx"
import "./Lista.css"
// Componente que almacena los productos y los muestra
const Lista = ({ productos }) => {
    return (
        <div className='lista'>
            <h3>Lista</h3>
            {productos.length === 0 && <h2>No hay productos</h2>}

            <div className='productos'>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        nombre={producto.nombre}
                    />
                ))}
            </div>
        </div>
    )
}

export default Lista