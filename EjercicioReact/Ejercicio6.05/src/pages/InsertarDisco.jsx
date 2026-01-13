import React from "react";
import { useState, useContext } from "react";
import Errores from "../components/Errores.jsx";
import Validar from "../components/Validar.jsx";
import "./InsertarDisco.css";
import { ContextoDiscos } from "../context/Proveedor.jsx";

// Componente del formulario para insertar un disco.
const FormularioDisco = () => {
    
    const { disco, actualizarDato, guardarDisco } = useContext(ContextoDiscos);

    return (
        <>
            <div className="App-header">
                <h2>Formulario de Discos</h2>
                <div className="formulario">
                    <form id="formu" name="formu">
                        <label htmlFor="nombre">Nombre del disco: </label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre del disco..." value={disco.nombre || ""}
                            onChange={(evento) => {
                                actualizarDato(evento);
                            }}
                        />
                        <label htmlFor="caratula">Carátula: </label>
                        <input type="url" id="caratula" name="caratula" placeholder="url de la carátula..." value={disco.caratula || ""}
                            onChange={(evento) => {
                                actualizarDato(evento);
                            }}
                        />
                        <label htmlFor="compositor">Grupo de música o intérprete: </label>
                        <input type="text" id="compositor" name="compositor" placeholder="Grupo o intérprete de la canción..." value={disco.compositor || ""}
                            onChange={(evento) => {
                                actualizarDato(evento);
                            }}
                        />
                        <label htmlFor="fecha">Año de publicación: </label>
                        <input type="number" id="fecha" name="fecha" placeholder="Año de publicación de la canción..." value={disco.fecha || ""}
                            onChange={(evento) => {
                                actualizarDato(evento);
                            }}
                        />
                        <div className="generos" id="generos">
                            Géneros de música a los que pertenece:
                            <label htmlFor="rock">Rock</label>
                            <input type="checkbox" id="rock" name="generos" value="rock" checked={disco.generos.includes("rock")}
                                onChange={(evento) => {
                                    actualizarGenerosCheck(evento);
                                }}
                            />

                            <label htmlFor="jazz">Jazz</label>
                            <input type="checkbox" id="jazz" name="generos" value="jazz" checked={disco.generos.includes("jazz")}
                                onChange={(evento) => {
                                    actualizarGenerosCheck(evento);
                                }}
                            />
                            <label htmlFor="funk">Funk</label>
                            <input type="checkbox" id="funk" name="generos" value="funk" checked={disco.generos.includes("funk")}
                                onChange={(evento) => {
                                    actualizarGenerosCheck(evento);
                                }}
                            />

                            <label htmlFor="hip-hop">Hip-hop</label>
                            <input type="checkbox" id="hip-hop" name="generos" value="hip-hop" checked={disco.generos.includes("hip-hop")}
                                onChange={(evento) => {
                                    actualizarGenerosCheck(evento);
                                }}
                            />

                            <label htmlFor="house">House</label>
                            <input type="checkbox" id="house" name="generos" value="house" checked={disco.generos.includes("house")}
                                onChange={(evento) => {
                                    actualizarGenerosCheck(evento);
                                }}
                            />
                        </div>
                        <label htmlFor="localizacion">Localización: </label>
                        <input type="text" id="localizacion" name="localizacion" placeholder="¿Dónde está guardado?" value={disco.localizacion || ""}
                            onChange={(evento) => {
                                actualizarDato(evento);
                            }}
                        />

                        <label htmlFor="prestado">¿Lo hemos prestado?</label>
                        <input
                            type="checkbox"
                            id="prestado"
                            name="prestado"
                            value="sí"
                            checked={disco.prestado === "sí"}
                            onChange={(evento) => {
                                actualizarPrestadoCheck(evento);
                            }}
                        />

                        <input type="button" id="guardar" value="Guardar"
                            onClick={(evento) => {
                                evento.preventDefault();
                                guardarDisco();
                            }}
                        />

                        <input type="button" id="limpiar" value="Limpiar"
                            onClick={() => {
                                setDisco(valoresIniciales);
                                setMensaje("");
                                setError("");
                            }}
                        />
                    </form>
                </div>
                <div id="informacion" className="informacion">
                    <Errores error={error} mensaje={mensaje} />
                </div>
                <br />
            </div>
        </>
    );
};

export default FormularioDisco;