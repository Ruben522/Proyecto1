import React from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio"
import InsertarDiscos from "../pages/InsertarDisco"
import ListarDiscos from "../pages/ListarDiscos"
import Error from "../pages/Error"


const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/insertar-disco" element={<InsertarDiscos/>} />
            <Route path="/listar-discos" element={<ListarDiscos />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Rutas