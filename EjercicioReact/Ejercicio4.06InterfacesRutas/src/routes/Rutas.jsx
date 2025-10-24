import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import AcercaDe from "../pages/AcercaDe";
import Error from "../pages/Error";

// Componente de rutas de la aplicación.
const Rutas = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/contacto' element={<Contacto />} /> 
        <Route path='/acerca-de' element={<AcercaDe />} />

        /* Ruta para manejar errores en caso 
        de que no se encuentre la página */
        <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default Rutas;