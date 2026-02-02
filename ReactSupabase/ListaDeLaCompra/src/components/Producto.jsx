import React from 'react'
import "./Producto.css";
import borrar from "../assets/imgs/borrar.png";
import editar from "../assets/imgs/editar.png";
import useSupabaseProductos from '../hooks/useSupabaseProductos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Componente que recibe como props los campos de la tabla de productos para crear un producto
const Producto = ({ id, name, price, weight, image }) => {

  const navegar = useNavigate();
  const { borrarProducto, editarProductos } = useSupabaseProductos();
  const confirmacionInicial = false
  const [confirmacionBorrar, setConfirmacionBorrar] = useState(confirmacionInicial);
  const [confirmacionEditar, setConfirmacionEditar] = useState(confirmacionInicial);

  return (
    <div className='producto'>
      <div className='borrar'>
        <img src={borrar} alt="borrar" onClick={() => setConfirmacionBorrar(id)} />
      </div>
      <div className='editar'>
        <img src={editar} alt="Editar" onClick={() => setConfirmacionEditar(id)} />
      </div>
      <h2>{name}</h2>
      <p><strong>Precio: {price} €</strong></p>
      <p>Peso: {weight}g</p>
      <div className='imagen-producto'>
        <img src={image} alt={name} />
      </div>
      {confirmacionBorrar && (
        <div className='confirmacion'>
          <p>¿Estás seguro de que quieres eliminar el producto?</p>
          <div className="acciones">
            <button
              className="si"
              onClick={() => {
                borrarProducto(id);
                setConfirmacionBorrar(confirmacionInicial);
              }}
            >
              Borrar
            </button>
            <button
              className="no"
              onClick={() => setConfirmacionBorrar(confirmacionInicial)}
            >
              No
            </button>
          </div>
        </div>

      )}
      {confirmacionEditar && (
        <div className='confirmacion'>
          <p>¿Estás seguro de que quieres editar el producto?</p>
          <div className="acciones">
            <button
              className="si"
              onClick={() => {
                navegar(`/editar-producto/${id}`);
                setConfirmacionEditar(confirmacionInicial);
              }}
            >
              Editar
            </button>
            <button
              className="no"
              onClick={() => setConfirmacionEditar(confirmacionInicial)}
            >
              No
            </button>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default Producto