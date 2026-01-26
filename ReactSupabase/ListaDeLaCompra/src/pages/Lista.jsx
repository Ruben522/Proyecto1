import React from 'react'
import useSupabaseSesion from '../hooks/useSupabaseSesion'
import useSupabaseProductos from '../hooks/useSupabaseProductos'
import SinPermiso from './SinPermiso';
import Producto from '../components/Producto';

// Página que muestra la lista de la compra si el usuario ha iniciado sesión.
const Lista = () => {
  const { sesionIniciada } = useSupabaseSesion();
  const { listaProductos, } = useSupabaseProductos();

  return (
    <>
      {sesionIniciada ? (
        <div className="lista">
          <h1>Lista de la compra</h1>
          {listaProductos.length > 0 ? (
            <ul>
              {listaProductos.map((producto) => (<Producto key={producto.id} producto={producto} />))}
            </ul>
          ) : (
            <p>No hay productos en la lista.</p>
          )}
        </div>
      ) : (
        <SinPermiso />
      )}
    </>
  )
}

export default Lista