import React from 'react';
import Producto from './Producto';
import "./Lista.css";

const Lista = ({ productos }) => {
    return (
        <div className='lista'>
            {productos.length === 0 ? (
                <h2>No hay productos disponibles.</h2>
            ) : (
                <div className='productos'>
                    {productos.map((prod) => (
                        <Producto
                            key={prod.id}
                            name={prod.name}
                            price={prod.price}
                            weight={prod.weight}
                            image={prod.image_url}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Lista;