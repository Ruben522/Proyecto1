"use strict";
import React from "react";
import "./Taquilla.css";

const Taquilla = ({ recaudacion }) => {

  return (
    <div className="taquilla">
      <h3>Taquilla: </h3>
      <p>{recaudacion}</p>
    </div>
  );
};

export default Taquilla;
