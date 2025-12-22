import React, { useContext, useEffect, useState } from 'react';
import { ContextoPeliculas } from "../context/Proveedor.jsx";
import Vehiculo from "./Vehiculo";
import "./Protagonista.css";

// Componente que muestra la información de un protagonista.
const Protagonista = ({ name, gender, height, mass, hair_color, eye_color, vehicles }) => {
    const { vehiculos, cargarVehiculos, error } = useContext(ContextoPeliculas);
    const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);

    useEffect(() => {
        if (vehicles && vehicles.length !== 0) {
            cargarVehiculos(vehicles);
            setVehiculoSeleccionado(null);
        };
    }, [vehicles]);

    return (
        <>
            {error && <Error mensaje={error} />}
            <div className="protagonista-info">
                <p><strong>Nombre:</strong> {name}</p>
                <p><strong>Género:</strong> {gender}</p>
                <p><strong>Altura:</strong> {height} cm</p>
                <p><strong>Peso:</strong> {mass} kg</p>
                <p><strong>Color de pelo:</strong> {hair_color}</p>
                <p><strong>Color de ojos:</strong> {eye_color}</p>
                <p><strong>Vehículos que utiliza:</strong></p>
                {(!vehicles || vehicles.length === 0) ? (
                    <p className="mensaje-sin-vehiculos">
                        Este personaje no pilota naves o vehículos en esta película.
                    </p>
                ) : (
                    <ul className="lista-vehiculos">
                        {vehiculos.map((v) => (
                            <li
                                key={v.name}
                                className="vehiculos-nombre"
                                onClick={() => setVehiculoSeleccionado(v)}
                            >
                                {v.name}
                            </li>
                        ))}
                    </ul>
                )}

                {vehiculoSeleccionado && (
                    <Vehiculo {...vehiculoSeleccionado} />
                )}
            </div>
        </>
    );
};

export default Protagonista;
