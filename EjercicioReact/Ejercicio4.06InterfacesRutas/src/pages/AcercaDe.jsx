import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AcercaDe.css';

// Componente que muestra la página donde se presenta información sobre la empresa.
const AcercaDe = () => {
  const navigate = useNavigate();
  return (
    <div className="acerca-de">
      <h1>Aperture Science.</h1>
      <p>Somos la empresa lider en tecnología y pruebas</p>
      <button
        onClick={() => navigate('/')}
      >
        Inicio
      </button>
    </div>
  );
};

export default AcercaDe;