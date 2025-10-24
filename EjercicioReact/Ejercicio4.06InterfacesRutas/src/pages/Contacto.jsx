import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contacto.css';

// Componente que muestra la página de contacto.
const Contacto = () => {
  const navigate = useNavigate();
  return (
    <div className="contacto">
      <h1>Contacta con nosotros.</h1>
      <button
        onClick={() => navigate('/')}
      >
        Inicio
      </button>
    </div>
  );
};

export default Contacto;