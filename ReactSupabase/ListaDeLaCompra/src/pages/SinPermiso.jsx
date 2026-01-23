import React from 'react'
import { useNavigate } from 'react-router-dom'
import permiso from "../assets/imgs/permiso.png"
import "./SinPermiso.css"

// Página que se muestra cuando el usuario intenta acceder a una página que no debería.
const SinPermiso = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>!No deberías estar aquí¡</h2>
            <img src={permiso} alt="Sin permiso"></img>
            <button className='volver' onClick={() => navigate("/")}>Volver</button>
        </div>
    )
}

export default SinPermiso