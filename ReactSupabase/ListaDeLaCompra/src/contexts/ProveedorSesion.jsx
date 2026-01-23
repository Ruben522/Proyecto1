import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validar from "../library/validar.js";
import useSesion from "../hooks/useSesion.js";
import Errores from "../pages/Errores.jsx";

const sesion = createContext();

const ProveedorSesion = ({ children }) => {
  const navegar = useNavigate();
  const { crearCuenta } = useSesion();

  const datosSesionInicial = {
    name: "",
    email: "",
    password: "",
  };
  const usuarioInicial = {};
  const sesionIniciadaInicial = false;

  /**
   * Estados para el control de la sesiíon.
   */
  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const guardarUsuario = async (datosDisco) => {
    try {
      const respuesta = await crearCuenta(datosSesion);
      setDatosSesion(datosSesionInicial);
    } catch (error) {
      setError(`Ha ocurrido un error al crear la sesión: ${error.message}`);
    }
  };
  const enviarFormulario = async () => {
    setError("");
    setMensaje("");
    console.log("¡Botón pulsado correctamente!");
    console.log("Datos a enviar:", datosSesion);
    const errores = validar(datosSesion);
    if (errores.length > 0) {
      setError(errores.join(" "));
      return;
    }
    try {
      await guardarUsuario(datosSesion);
      limpiarFormulario();
      setMensaje("Cuenta creada correctamente. Se ha enviado un correo de verificación.");
    } catch (error) {
      setError(error.message);
    }
  };
  const limpiarFormulario = () => {
    setDatosSesion(datosSesionInicial);
    setMensaje("");
    setError("");
  };

  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion((user) => ({ ...user, [name]: value }));

  };

  const exportar = {
    enviarFormulario,
    limpiarFormulario,
    actualizarDato,
    error,
    mensaje,
    datosSesion,
  };

  return <sesion.Provider value={exportar}>{children}</sesion.Provider>;
};

export default ProveedorSesion;
export { sesion };
