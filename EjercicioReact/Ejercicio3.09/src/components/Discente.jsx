import React from "react";

// Componente discente que muestra su información.
const Discente = ({ id, nombre, apellidos, curso, aficiones, comida }) => {
  return (
    <div className="discente">
      <h3>{nombre} {apellidos}</h3>
      <p>Id: {id}</p>
      <p>Curso: {curso}</p>
      <p>Aficiones: {aficiones.join(", ")}</p>
      <p>Comida favorita: {comida}</p>
    </div>
  );
};

export default Discente;
