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
    let resultadoFiltro = "";

    const [listaProductos, setListaProductos] = useState(productosIniciales);
    const [listaFiltrada, setListaFiltrada] = useState(productosIniciales)
    const [mensaje, setMensaje] = useState(mensajeInicial);
    const [error, setError] = useState(errorInicial);
    const { listarProductos } = useProductos();

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await listarProductos();
                setListaProductos(respuesta);
            } catch (error) {
                setError("Error al cargar los productos.");
                console.error(error);
            }
        };
        obtenerProductos();
    }, []);

    const filtrarPorNombre = (nombre) => {
        resultadoFiltro = listaProductos.filter((producto) =>
            producto.name
                .toLowerCase()
                .includes(nombre.toLowerCase()),
        );
        setListaProductos(resultadoFiltro);
    }

    const filtrarPorPeso = (peso) => {
        resultadoFiltro = listaProductos.filter((producto) =>
            producto.weight === peso
        );
        setListaProductos(resultadoFiltro);
    }

    const filtrarPorPrecio = (precio) => {
        resultadoFiltro = listaProductos.filter((producto) =>
            producto.price === precio
        );
        setListaProductos(resultadoFiltro);
    }

    const limpiarFiltro = () => {
        setListaProductos(listaProductos);
    }

    const exportar = {
        listaProductos,
        filtrarPorNombre,
        filtrarPorPeso,
        filtrarPorPrecio,
        limpiarFiltro,
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
