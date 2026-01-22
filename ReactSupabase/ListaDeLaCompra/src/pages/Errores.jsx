import React from "react";

// Componente para mostrar errores y mensajes.
const Errores = ({ error, mensaje }) => {
  return (
    <>
      <h2>Error</h2>
      <p>{error}{mensaje}</p>
    </>
  );
};

export default Errores;
