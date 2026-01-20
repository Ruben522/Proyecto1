import React, { useState } from "react";

export const useAPI = () => {
    /**
     * Estados para las fases de la comunicación con la API.
     */
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Función genérica para hacer solicitudes a la API pasado como parámetro.
     */
    const solicitud = async (url, options = {}) => {
        setCargando(true);
        setError(null);
        try {
            const respuesta = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    //...options.headers, -> Si es necesario añadir algo más a headers.
                },
                ...options,
            });
            if (!respuesta.ok) {
                throw new Error(
                    `Error en la solicitud ${respuesta.status}: ${respuesta.statusText}`
                );
            }
            const datos = await respuesta.json();
            return datos;

        } catch (error) {
            setError(error.message || "Algo salió mal, feo.");
            throw error;
            
        } finally {
            setCargando(false);
        }
    };

    // Función para GET.
    const obtener = (url) => {
        return solicitud(url);
    };

    // Función para POST.
    const guardar = (url, body) =>
        solicitud(url, {
            method: "POST",
            body: JSON.stringify(body),
        });

    // Función para PUT.
    const editarPUT = (url, body) =>
        solicitud(url, {
            method: "PUT",
            body: JSON.stringify(body),
        });
    // Función para PATCH.
    const editarCampo = (url, body) =>
        solicitud(url, {
            method: "PATCH",
            body: JSON.stringify(body),
        });

    // Fución para DELETE.
    const borrar = (url) =>
        solicitud(url, {
            method: "DELETE",
        });

    return {
        cargando,
        error,
        obtener,
        guardar,
        editarPUT,
        editarCampo,
        borrar,
    };
};

export default useAPI;
