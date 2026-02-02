import React from 'react'
import "./Formulario.css"
import useSupabaseProductos from "../hooks/useSupabaseProductos.js";
import Errores from "../pages/Errores.jsx";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

// Página para crear un nuevo producto o editar.
const CrearProducto = () => {
    const {
        actualizarDato,
        enviarFormularioProducto,
        limpiarFormulario,
        mensaje,
        error,
        producto,
        cargarProductoPorId,
    } = useSupabaseProductos();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            cargarProductoPorId(id);
        }
    }, [id]);

    return (
        <div className='formulario'>
            <h1>Crear Producto</h1>
            <form id="formulario">
                <label htmlFor="name">Nombre del Producto</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre del producto"
                    value={producto.name}
                    onChange={(evento) => actualizarDato(evento)}
                />
                <label htmlFor="price">Precio</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Precio del producto"
                    value={producto.price}
                    onChange={(evento) => actualizarDato(evento)}
                />
                <label htmlFor="weight">Peso</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Peso del producto"
                    value={producto.weight}
                    onChange={(evento) => actualizarDato(evento)}
                />
                <label htmlFor="image_url">URL de la Imagen</label>
                <input
                    type="text"
                    id="image_url"
                    name="image_url"
                    placeholder="URL de la imagen del producto"
                    value={producto.image_url}
                    onChange={(evento) => actualizarDato(evento)}
                />
                <input
                    type="button"
                    value="Limpiar"
                    onClick={() => {
                        limpiarFormulario();
                    }}
                />
                <input
                    type="button"
                    value="Crear Producto"
                    onClick={() => {
                        enviarFormularioProducto();
                    }}
                />
            </form>
            <Errores error={error} mensaje={mensaje} />
        </div>
    )
}

export default CrearProducto