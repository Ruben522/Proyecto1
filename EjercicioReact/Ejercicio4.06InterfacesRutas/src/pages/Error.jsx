import React from "react";
import "./Error.css";

import lie from '../assets/img/mentiras.jpg';


// Componente que maneja los errores de página no encontrada.
const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="mensaje-error">
            <h1>Error 404</h1>
            <p>Ha pasado algo.</p>
            <img src={lie} alt="lie" />
            <button
                onClick={() => navigate('/')}
            >
                Inicio
            </button>
        </div>
    );
};

export default Error;