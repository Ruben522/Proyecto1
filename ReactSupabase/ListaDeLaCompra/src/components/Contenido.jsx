import React from "react";
import "./Contenido.css";
import Rutas from "../routes/Rutas";
import ProveedorProductos from "../contexts/ProveedorProductos";
import ProveedorListas from "../contexts/ProveedorListas";
import ProveedorListaProducto from "../contexts/ProveedorListaProducto";

// Este componente contiene el apartado principal de la aplicación (Lista de productos, formularios...)
const Contenido = () => {
  return (
    <div className="contenido">
      <>
        <ProveedorListas>
          <ProveedorProductos>
            <ProveedorListaProducto>
            <Rutas />
            </ProveedorListaProducto>
          </ProveedorProductos>
        </ProveedorListas>
      </>
    </div>
  );
};

export default Contenido;
