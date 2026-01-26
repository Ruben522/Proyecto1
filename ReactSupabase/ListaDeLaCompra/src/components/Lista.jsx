import React from 'react';
import Producto from './Producto';
import "./Lista.css";

const Lista = ({ productos }) => {
    return (
        <div className='lista'>
            <h3>Lista de la Compra</h3>

            {productos.length === 0 ? (
                <h2>No hay productos disponibles.</h2>
            ) : (
                <div className='productos'>
                    {productos.map((prod) => (
                        <Producto
                            key={prod.id}
                            nombre={prod.nombre}
                            precio={prod.precio}
                            peso={prod.peso}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Lista;