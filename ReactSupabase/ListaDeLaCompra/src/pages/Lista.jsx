import React from 'react'
import useSupabase from '../hooks/useSupabase'
import SinPermiso from './SinPermiso';

// Página que muestra la lista de la compra si el usuario ha iniciado sesión.
const Lista = () => {
  const { sesionIniciada } = useSupabase();

  return (
    <>
      {sesionIniciada ? (
        <div className="lista">
          <h1>Lista de la compra</h1>
        </div>
      ) : (
        <SinPermiso />
      )}
    </>
  )
}

export default Lista