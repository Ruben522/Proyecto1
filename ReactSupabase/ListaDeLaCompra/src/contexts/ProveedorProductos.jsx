import React, {
    createContext,
    useEffect,
    useState,
} from "react";
import useProductos from "../hooks/useProductos.js";

const productos = createContext();

const ProveedorProductos = ({ children }) => {
    const productosIniciales = [];
    const mensajeInicial = "";
    const errorInicial = "";

    const [listaProductos, setListaProductos] = useState(
        productosIniciales,
    );
    const [mensaje, setMensaje] = useState(mensajeInicial);
    const [error, setError] = useState(errorInicial);

    const { listarProductos } = useProductos();

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await listarProductos();
                console.log(respuesta)
                setListaProductos(respuesta);
            } catch (error) {
                setError("Error al cargar los productos.");
                console.error(error);
            }
        };
        obtenerProductos();
    }, []);

    const exportar = {
        listaProductos,
        mensaje,
        error,
    };

    return (
        <productos.Provider value={exportar}>
            {children}
        </productos.Provider>
    );
};

export default ProveedorProductos;
export { productos };
