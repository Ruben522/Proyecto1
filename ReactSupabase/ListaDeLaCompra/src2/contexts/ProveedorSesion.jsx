import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { validar, validarSesion } from "../library/validar.js";
import useSesion from "../hooks/useSesion.js";

const sesion = createContext();

const ProveedorSesion = ({ children }) => {
  const navegar = useNavigate();
  const { crearCuenta, iniciarSesion, cerrarSesion, cargarUsuario } = useSesion();

  const datosSesionInicial = {
    name: "",
    email: "",
    password: "",
  };
  const mensajeInicial = "";
  const errorInicial = "";
  const usuarioInicial = {};
  const sesionIniciadaInicial = false;

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);
  const [mensaje, setMensaje] = useState(mensajeInicial);
  const [error, setError] = useState(errorInicial);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  const guardarUsuario = async () => {
    try {
      const respuesta = await crearCuenta(datosSesion);
      setDatosSesion(datosSesionInicial);
    } catch (error) {
      throw error;
    }
  };

  const obtenerUsuario = async () => {
    try {
      const respuesta = await cargarUsuario();
      setUsuario({
        email: respuesta.user.email,
        name: respuesta.user.user_metadata?.name,
      });
      setSesionIniciada(true);
    } catch (error) {
      throw error;
    }
  };

  const quitarSesion = async () => {
    try {
      cerrarSesion();
      setUsuario(usuarioInicial)
      setSesionIniciada(false);
      navegar("/");
    } catch (error) {
      setError("Error al cerrar sesión");
    }
  };

  const iniciarSesionUsuario = async () => {
    try {
      const respuesta = await iniciarSesion(datosSesion);
      setUsuario({
        email: respuesta.user.email,
        // No sabía que se tenia que hacer así. Intentaba simplemente con respuesta.user.name pero no funcionaba.
        // Esta es la forma en la que chatGPT me ha indicado que se hace.
        name: respuesta.user.user_metadata?.name,

      })
      setSesionIniciada(true);
    } catch (error) {
      throw error;
    }
  };

  const enviarFormulario = async () => {
    setError("");
    setMensaje("");
    const errores = validar(datosSesion);
    if (errores.length > 0) {
      setError(errores.join(" "));
      return;
    }
    try {
      await guardarUsuario(datosSesion);
      limpiarFormulario();
      setMensaje(
        "Cuenta creada correctamente. Se ha enviado un correo de verificación.",
      );
    } catch (error) {
      setError("Hubo un problema al crear la cuenta");
    }
  };

  const limpiarFormulario = () => {
    setDatosSesion(datosSesionInicial);
    setMensaje("");
    setError("");
  };

  // He hecho dos enviarFormulario porque si no, al iniciar sesión, me salta el error de
  // validación de nombre (que no es necesario para iniciar sesión).
  const enviarFormularioSesion = async () => {
    setMensaje("");
    setError("");
    const errores = validarSesion(datosSesion);
    if (errores.length > 0) {
      setError(errores.join(" "));
      return;
    }
    try {
      await iniciarSesionUsuario(datosSesion);
      limpiarFormulario();
      setMensaje(
        "Sesión iniciada correctamente, redirigiendo...",
      );
      navegar("/");
    } catch (error) {
      setError("La cuenta no existe o las parámetros no son correctos.");
    }
  };

  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const exportar = {
    enviarFormulario,
    limpiarFormulario,
    actualizarDato,
    enviarFormularioSesion,
    error,
    mensaje,
    datosSesion,
    usuario,
    sesionIniciada,
    quitarSesion,
  };

  return (
    <sesion.Provider value={exportar}>
      {children}
    </sesion.Provider>
  );
};

export default ProveedorSesion;
export { sesion };
