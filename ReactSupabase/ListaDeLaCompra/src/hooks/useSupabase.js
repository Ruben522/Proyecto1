import React, { useContext } from "react";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";

const useSupabase = () => {
  /**
   * Hook personalizado para consumir el contexto de la sesión de forma segura.
   * Lanza un error si se intenta usar fuera de su proveedor.
   */
  const contexto = useContext(ContextoSesion);

  if (!contexto) {
    throw new Error(
      "El hook useSupabase debe ser utilizado dentro de <ProveedorSesion>."
    );
  }

  return contexto;
};

export default useSupabase;