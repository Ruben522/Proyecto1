"use strict";
import React from 'react';
import Contenedor from './Contenedor';
import './style/peliculasPelicula.css';
const Pelicula = ({ titulo, direccion, cartel, children }) => {
  return (
    <div className="pelicula-contenedor">
      <h2 className="pelicula-titulo">{titulo}</h2>
      <p className="pelicula-direccion">Dirigida por: {direccion}</p>
      <img src={cartel} className="pelicula-cartel" />

      <Contenedor>
        <h3>Resumen</h3>
      </Contenedor>

      <Contenedor>
        <h3>Elenco</h3>
        {children}
      </Contenedor>
    </div>
  );
};

export default Pelicula;