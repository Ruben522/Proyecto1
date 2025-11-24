import React from "react";
import { useState } from "react";
import MensajeError from "./MensajeError.jsx"; 

// Componente principal para insertar discos.
const FormularioDisco = () => {
    
    const valoresIniciales = {
        nombre: "",
        caratula: "",
        compositor: "",
        anio: "",
        localizacion: "",
        prestado: "",
        rock: "",
        jazz: "",
        funk: "",
        hiphop: "",
        house: "",
    };

    const [disco, setDisco] = useState(valoresIniciales);
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setDisco((prevDisco) => ({ ...prevDisco, [name]: value }));
    };

    const actualizarDatoCheck = (evento) => {
        const { name } = evento.target;
        const value = disco[name] === "" ? evento.target.value : "";
        setDisco({ ...disco, [name]: value });
    };
    
    return (
        <>
            <div className="App-header">
                <h2>Formulario de Discos</h2>

                <div className="formulario">
                    <form id="formu" name="formu">
                        <label htmlFor="nombre">Nombre del disco: </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre del disco..."
                            value={disco.nombre || ""}
                            onChange={(e) => actualizarDato(e)} // Función flecha en onChange
                        />
                        
                        <label htmlFor="caratula">Carátula: </label>
                        <input
                            type="url"
                            id="caratula"
                            name="caratula"
                            placeholder="url de la carátula..."
                            value={disco.caratula || ""}
                            onChange={(e) => actualizarDato(e)}
                        />
                        <label htmlFor="compositor">Grupo de música o intérprete: </label>
                        <input
                            type="text"
                            id="compositor"
                            name="compositor"
                            placeholder="Grupo o intérprete de la canción..."
                            value={disco.compositor || ""}
                            onChange={(e) => actualizarDato(e)}
                        />
                        
                        <label htmlFor="anio">Año de publicación: </label>
                        <input
                            type="number"
                            id="number"
                            name="number"
                            placeholder="Año de publicación de la canción..."
                            value={disco.number || ""}
                            onChange={(e) => actualizarDato(e)}
                        />
                        
                        {/* CHECKBOXES: Géneros musicales (Individuales) */}
                        <div className="generos" id="generos">
                            
                        </div>
                        
                        <label htmlFor="localizacion">Localización: </label>
                        <input
                            type="text"
                            id="localizacion"
                            name="localizacion"
                            placeholder="¿Dónde está guardado? Ej: A-12"
                            value={disco.localizacion || ""}
                            onChange={(e) => actualizarDato(e)}
                        />
                        
                        <label htmlFor="prestado">¿Lo hemos prestado?</label>
                        <input
                            type="checkbox"
                            id="prestado"
                            name="prestado"
                            value="sí"
                            checked={disco.prestado === "sí"}
                            onChange={(e) => actualizarDatoCheck(e)}
                        />
                        <input 
                            type="button" 
                            id="guardar" 
                            value="Guardar" 
                            onClick={guardarDisco} 
                            style={{ marginRight: "10px" }}
                        />
                    </form>
                </div>
                <MensajeError error={error} mensaje={mensaje} />
            </div>
        </>
    );
};

export default FormularioDisco;