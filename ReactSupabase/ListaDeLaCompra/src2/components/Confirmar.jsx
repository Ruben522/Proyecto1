import React from 'react'
import useSupabaseProductos from "../hooks/useSupabaseProductos.js";

const Confirmar = () => {
  const { confirmacion, confirmar } = useSupabaseProductos();

  return (
    <div className='confirmar'>
    </div>
  )
}

export default Confirmar