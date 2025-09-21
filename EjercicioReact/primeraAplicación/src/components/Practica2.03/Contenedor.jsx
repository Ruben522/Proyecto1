"use strict";
import React from "react";
import './style/contenedorPeliculas.css';

const Contenedor = ({ children }) => {
    return (
        <div className="peliculasContenedor">
            {children}
        </div>
    );
}

export default Contenedor;