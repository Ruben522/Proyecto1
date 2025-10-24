import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Productos.css";

import portalGunImage from '../assets/img/portal-gun.jpg'; 
import turretImage from '../assets/img/turret.png';
import cakeImage from '../assets/img/portalCake.png';

// Componente que muestra los productos.
const Productos = () => {
    const navigate = useNavigate();
    return (
        <div className="productos">
            <h1>Productos</h1>
            <h2>Estos son nuestros productos:</h2>
            <ul>
                <li>Portal Gun</li>
                <img src={portalGunImage} alt="Portal Gun" />
            </ul>
            <ul>
                <li>Turret</li>
                <img src={turretImage} alt="Turret" />
            </ul>
            <ul>
                <li>Cake</li>
                <img src={cakeImage} alt="Portal Cake" />
            </ul>
            <button
                onClick={() => navigate('/')}
            >
                Inicio
            </button>
        </div>
    )
}

export default Productos