import React from "react";

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
