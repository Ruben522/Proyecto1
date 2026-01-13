import React, { useContext } from "react";
import { ContextoDiscentes } from "../context/Proveedor.jsx";

const useDiscos = () => {
  /**
   * Hook personalizado para consumir el contexto de Discos de forma segura.
   * Lanza un error si se intenta usar fuera de su proveedor.
   */
  const contexto = useContext(ContextoDiscentes);

  if (!contexto) {
    throw new Error(
      "El hook useDiscos debe ser utilizado dentro de <ProveedorDiscos>."
    );
  }

  return contexto;
};

export default useDiscos;
