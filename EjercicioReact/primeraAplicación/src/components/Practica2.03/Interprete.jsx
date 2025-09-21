"use strict";
import React from "react";
import './style/contenedorInterprete.css';
const Interprete = ({ nombre, foto, children }) => {
    return (
        <div className="interprete">
            <h2 className="nombre-interprete">{nombre}</h2>
            <img src={foto} className="foto-interprete" />
            <div className="descripcion-interprete">
                {children}
            </div>  
        </div>
    )
}

export default Interprete;