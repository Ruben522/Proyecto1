"use strict";
import React from "react";

// Componente que representa la taquilla de una película.
// Recibe como props: recaudación.
const Taquilla = ({ recaudacion }) => {

  const recaudacionFormateada = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(recaudacion);

  return (
    <div className="taquilla">
      <p>{recaudacionFormateada}</p>
    </div>
  );
};

export default Taquilla;
