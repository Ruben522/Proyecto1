import React from 'react';
import Producto from './Producto';
import "./Lista.css";

// Componente que recorre la lista de productos.
const Lista = ({ productos }) => {

    return (
        <div className='lista'>
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
        </div>
    )
};

export default Lista;