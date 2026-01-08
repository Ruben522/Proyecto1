import React from "react";

// Componente para mostrar errores y mensajes.
const Errores = ({ error, mensaje }) => {
  return (
      <>
        {error}{mensaje}
      </>
  );
};

export default Errores;
