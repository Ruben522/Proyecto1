import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from "../pages/Inicio.jsx";
import Lista from "../pages/ListaProductos.jsx";
import Error from "../pages/Errores.jsx";
import Registrarse from "../pages/Registro.jsx";
import IniciarSesion from "../pages/IniciarSesion.jsx";
import CrearProducto from "../pages/CrearProducto.jsx";
import EditarProducto from "../pages/EditarProducto.jsx";

// Componente que contiene las rutas de la aplicación.
const Rutas = () => {

    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/registro" element={<Registrarse />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/crear-producto" element={<CrearProducto />} />
            <Route path="/editar-producto/:id" element={<EditarProducto />} />
            <Route path='*' element={<Error />} />
        </Routes>

    )
}

export default Rutas