import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { validar, validarSesion } from "../library/validar.js";
import useSesion from "../hooks/useSesion.js";
import useNotificaciones from "../hooks/useNotificaciones.js";
import { supabaseConexion } from "../supabase/Supabase.js";

/* Proveedor de la sesión de usuarios */
const sesion = createContext();

const ProveedorSesion = ({ children }) => {
  const navegar = useNavigate();
  const { crearCuenta, iniciarSesion, cerrarSesion, cargarUsuario } = useSesion();
  const { notificar } = useNotificaciones();

  const datosSesionInicial = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const usuarioInicial = {};
  const sesionIniciadaInicial = false;

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);
  const [error, setError] = useState(""); 

  useEffect(() => {
    const subscripcion = supabaseConexion.auth.onAuthStateChange(
      (evento, session) => {
        if (session) {
          setSesionIniciada(true);
          obtenerUsuario();
        } else {
          setSesionIniciada(false);
          navegar("/iniciar-sesion"); 
        }
      }
    );
  }, []);


  const guardarUsuario = async () => {
    try {
      await crearCuenta(datosSesion);
      setDatosSesion(datosSesionInicial);
    } catch (error) {
      throw error;
    }
  };

  const obtenerUsuario = async () => {
    try {
      const respuesta = await cargarUsuario();
      setUsuario({
        id: respuesta.user.id,
        email: respuesta.user.email,
        name: respuesta.user.user_metadata?.name,
      });
    } catch (error) {
      notificar("Error al obtener el usuario", "error")
    }
  };

  const quitarSesion = async () => {
    try {
      await cerrarSesion();
      setUsuario(usuarioInicial);
      navegar("/");
      notificar("Se ha cerrado sesión", "exito");
    } catch (error) {
      notificar("Error al cerrar sesión", "error");
    }
  };

  const iniciarSesionUsuario = async () => {
    try {
      const respuesta = await iniciarSesion(datosSesion);
      setUsuario(
        respuesta.user
        /*
        email: respuesta.user.email,
        // No sabía que se tenia que hacer así. Intentaba simplemente con respuesta.user.name pero no funcionaba.
        // Esta es la forma en la que chatGPT me ha indicado que se hace.
        name: respuesta.user.user_metadata?.name,*/
      );
    } catch (error) {
      throw error;
    }
  };

  const enviarFormulario = async () => {
    setError("");
    const errores = validar(datosSesion);
    if (errores.length > 0) {
      notificar(errores[0], "error");
      setError(errores.join(" "));
      return;
    }
    try {
      await guardarUsuario(datosSesion);
      limpiarFormulario();
      notificar("Cuenta creada correctamente. Se ha enviado un correo de verificación.", "exito");
    } catch (error) {
      notificar("Hubo un problema al crear la cuenta", "error");
    }
  };

  const limpiarFormulario = () => {
    setDatosSesion(datosSesionInicial);
    setError("");
  };

  const enviarFormularioSesion = async () => {
    setError("");
    const errores = validarSesion(datosSesion);
    if (errores.length > 0) {
      notificar(errores[0], "error");
      setError(errores.join(" "));
      return;
    }
    try {
      await iniciarSesionUsuario(datosSesion);
      limpiarFormulario();
      // Notificación de ÉXITO
      notificar("Sesión iniciada.", "exito");
      navegar("/");
    } catch (error) {
      notificar("La cuenta no existe o las parámetros no son correctos.", "error");
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
    datosSesion,
    usuario,
    sesion,
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