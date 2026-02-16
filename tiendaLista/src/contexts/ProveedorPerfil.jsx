import React, { createContext, useEffect, useState } from "react";
import usePeticiones from "../hooks/usePeticiones.js";
import useNotificaciones from "../hooks/useNotificaciones.js";
import useSupabaseSesion from "../hooks/useSupabaseSesion.js";

const perfil = createContext();

const ProveedorPerfil = ({ children }) => {
    const { notificar } = useNotificaciones();
    const { usuario } = useSupabaseSesion();
    const { crear, editarPorId, traerUnoPorCampo } = usePeticiones("perfiles");

    const perfilInicial = {
        id: null,
        user_id: null,
        name: "",
        avatar_url: "",
        description: "",
    };

    const [perfilUsuario, setPerfilUsuario] = useState(perfilInicial);
    const [modoEdicion, setModoEdicion] = useState(false);

    useEffect(() => {
        if (usuario?.id && usuario?.name) {
            cargarPerfil(usuario.id);
        }
    }, [usuario]);

    const cargarPerfil = async (userId) => {
        try {
            const datos = await traerUnoPorCampo("user_id", userId);

            if (datos) {
                setPerfilUsuario(datos);
            } else {
                await crearPerfilInicial(userId);
            }

        } catch (error) {
            console.log("Error real:", error);
            notificar("Error al cargar el perfil", "error");
        }
    };

    const crearPerfilInicial = async (userId) => {
        try {
            const nuevoPerfil = {
                user_id: userId,
                name: usuario.name,
                avatar_url: "",
                description: "",
            };

            await crear(nuevoPerfil);

            const datos = await traerUnoPorCampo("user_id", userId);
            setPerfilUsuario(datos);
        } catch (error) {
        }
    };

    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setPerfilUsuario((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const activarEdicion = () => {
        setModoEdicion(true);
    };

    const cancelarEdicion = () => {
        cargarPerfil(usuario.id);
        setModoEdicion(false);
    };

    const guardarPerfil = async () => {
        try {
            await editarPorId(perfilUsuario);
            notificar("Perfil actualizado correctamente", "exito");
            setModoEdicion(false);
        } catch (error) {
            notificar("Error al actualizar el perfil", "error");
        }
    };

    const avataresPredeterminados = [
        "https://wallpapers.com/images/hd/goku-dragon-ball-super-r33dysxh1ubub7nk.jpg",
        "https://imgs.search.brave.com/825r_zItLJyd9lMZhlyCOOSrPebUz9wtiTGn3RQM9mo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvZmxhdC12/ZWN0b3ItY2hpbGRy/ZW5zLWlsbHVzdHJh/dGlvbi1vbi02MDBu/dy0yNjU3NTk2NzE1/LmpwZw",
        "https://upload.wikimedia.org/wikipedia/en/8/88/Vegeta_Dragon_Ball.jpg",
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/HK/en/99/HP0700-CUSA08526_00-PREMIUMAVATAR001/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=330&h=330",
        "https://media.vandal.net/m/10-2025/28/2025102810485333_1.jpg",
    ]

    const seleccionarAvatar = (url) => {
        setPerfilUsuario((datosAnteriores) => ({
            ...datosAnteriores,
            avatar_url: url,
        }));
    };


    const exportar = {
        perfilUsuario,
        actualizarDato,
        guardarPerfil,
        modoEdicion,
        activarEdicion,
        cancelarEdicion,
        seleccionarAvatar,
        avataresPredeterminados,
    };


    return (
        <perfil.Provider value={exportar}>
            {children}
        </perfil.Provider>
    );
};

export default ProveedorPerfil;
export { perfil };
