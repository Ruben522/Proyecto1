import React from 'react'
import './Inicio.css'

// Componente de la página de inicio.
const Inicio = () => {
    return (
        <div className="inicio">
            <h1>Aperture Science</h1>
            <img src="./img/aperture-science.jpg" alt="Aperture Science" />
            <p>Bienvenido a Aperture Science, donde la ciencia y
                los portales son nuestro negocio.</p>
        </div>
    );
}

export default Inicio