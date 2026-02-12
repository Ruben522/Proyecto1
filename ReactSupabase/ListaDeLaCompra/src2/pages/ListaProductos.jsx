import React from "react";
import { useState } from "react";
import useSupabaseSesion from "../hooks/useSupabaseSesion";
import useSupabaseProductos from "../hooks/useSupabaseProductos";
import Lista from "../components/Lista";
import "./ListaProductos.css";

// Página que muestra la lista con sus productos.
// Contiene filtros y ordenación de los productos.
const ListaProductos = () => {
  const { sesionIniciada } = useSupabaseSesion();
  const {
    listaFiltrada,
    filtrarPorNombre,
    filtrarPorPeso,
    filtrarPorPrecio,
    limpiarFiltro,
    productosTotales,
    precioMedio,
    ordenarPorNombre,
    ordenarPorPrecio,
    ordenarPorPeso,
    mensaje,
    error,
  } = useSupabaseProductos();

  const [textoFiltro, setTextoFiltro] = useState("");

  return (
    <div className="lista">
      <h1>Lista de la compra</h1>

      {sesionIniciada && (
        <>
          <h3>Filtros</h3>

          <div className="filtros">
            <input
              type="text"
              placeholder="Huevos, 100g, 2€..."
              value={textoFiltro}
              onChange={(e) => setTextoFiltro(e.target.value)}
            />
            <div className="clasificar">
              <button onClick={() => filtrarPorNombre(textoFiltro)}>
                Nombre
              </button>
              <button onClick={() => filtrarPorPeso(textoFiltro)}>
                Peso
              </button>
              <button onClick={() => filtrarPorPrecio(textoFiltro)}>
                Precio
              </button>
            </div>

            <div className="ordenar">
              <button onClick={ordenarPorNombre}>
                Ordenar por Nombre
              </button>
              <button onClick={ordenarPorPrecio}>
                Ordenar por Precio
              </button>
              <button onClick={ordenarPorPeso}>
                Ordenar por Peso
              </button>
            </div>

            <button
              className="limpiar"
              onClick={() => {
                setTextoFiltro("");
                limpiarFiltro();
              }}
            >
              Limpiar Filtro
            </button>
          </div>
        </>
      )}

      <div className="mensaje-filtro">
        {mensaje && <p>{mensaje}</p>}
        {error && <p className="error">{error}</p>}
      </div>

      <Lista productos={listaFiltrada} />
      <p>{`Productos en la lista: ${productosTotales()}`}</p>
      <p>{`Precio medio: ${precioMedio()}€`}</p>
    </div>
  );
};


export default ListaProductos;
