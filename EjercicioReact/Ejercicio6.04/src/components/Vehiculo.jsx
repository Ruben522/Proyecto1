import React from 'react'
import "./Vehiculo.css";

// Componente que muestra la información de un vehículo.
const Vehiculo = ({
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class,
}) => {
  return (
    <div className="vehiculo-informacion">
      <h2>{name}</h2>
      <p><strong>Modelo:</strong> {model}</p>
      <p><strong>Fabricante:</strong> {manufacturer}</p>
      <p><strong>Precio:</strong> {cost_in_credits}</p>
      <p><strong>Longitud:</strong> {length}</p>
      <p><strong>Velocidad Máxima:</strong> {max_atmosphering_speed}</p>
      <p><strong>Cantidad de Tripulantes:</strong> {crew}</p>
      <p><strong>Pasajeros:</strong> {passengers}</p>
      <p><strong>Carga Máxima:</strong> {cargo_capacity}</p>
      <p><strong>Duración de Consumibles:</strong> {consumables}</p>
      <p><strong>Tipo de Vehículo:</strong> {vehicle_class}</p>
    </div>
  )
}

export default Vehiculo