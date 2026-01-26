import React from "react";
import { useState } from "react";
import useSupabaseSesion from "../hooks/useSupabaseSesion";
import useSupabaseProductos from "../hooks/useSupabaseProductos";
import SinPermiso from "./SinPermiso";
import Producto from "../components/Producto";
import Lista from "../components/Lista";

// Páina que muestra la lista con sus productos.
// Contendrá acciones sobre el listado.
const ListaProductos = () => {
  const { sesionIniciada } = useSupabaseSesion();
  const {
    listaProductos,
    listaFiltrados,
    filtrarPorNombre,
    filtrarPorPeso,
    filtrarPorPrecio,
    limpiarFiltro,
  } = useSupabaseProductos();
  const [textoFiltro, setTextoFiltro] = useState("");

  return (
    <>
      {sesionIniciada ? (
        <div className="lista">
          <h1>Lista de la compra</h1>
          <h3>Filtros</h3>

          <div className="filtros">
            <input
              type="text"
              placeholder="Huevos, 100g, 2€..."
              value={textoFiltro}
              onChange={(e) => setTextoFiltro(e.target.value)}
            />
            <button onClick={() => filtrarPorNombre(textoFiltro)}>
              Nombre
            </button>
            <button onClick={() => filtrarPorPeso(textoFiltro)}>Peso</button>
            <button onClick={() => filtrarPorPrecio(textoFiltro)}>
              Precio
            </button>
            <button
              onClick={() => {
                setTextoFiltro("");
                limpiarFiltro();
              }}
            >
              Limpiar Filtro
            </button>
          </div>
          <Lista productos={listaProductos} />
          <p>Productos en la lista: {listaProductos.length}</p>
        </div>
      ) : (
        <SinPermiso />
      )}
    </>
  );
};

export default ListaProductos;
