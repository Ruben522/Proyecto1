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
    let ordenada = [];

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
                setListaFiltrada(respuesta);
            } catch (error) {
                setError("Error al cargar los productos.");
            }
        };
        obtenerProductos();
    }, []);

    const filtrarPorNombre = (nombre) => {
        setMensaje("");
        resultadoFiltro = listaProductos.filter((producto) =>
            producto.name
                .toLowerCase()
                .includes(nombre.toLowerCase()),
        );
        if (resultadoFiltro.length === 0) {
            setMensaje("No se encontraron productos con ese nombre.");
        }
        setListaFiltrada(resultadoFiltro);
    }

    const filtrarPorPeso = (peso) => {
        setMensaje("");
        resultadoFiltro = listaProductos.filter((producto) =>
            producto.weight <= Number(peso)
        );
        if (resultadoFiltro.length === 0) {
            setMensaje("No se encontraron productos con ese peso.");
        }
        setListaFiltrada(resultadoFiltro);
    }

    const filtrarPorPrecio = (precio) => {
        setMensaje("");
        resultadoFiltro = listaProductos.filter((producto) =>
            producto.price <= Number(precio)
        );
        if (resultadoFiltro.length === 0) {
            setMensaje("No se encontraron productos con ese precio.");
        }
        setListaFiltrada(resultadoFiltro);
    }

    const limpiarFiltro = () => {
        setListaFiltrada(listaProductos);
        setMensaje("");
        setError("");
    }

    const precioMedio = () => {
        let precioTotal = 0;
        listaFiltrada.forEach((producto) => {
            precioTotal += producto.price;
        });
        if (listaFiltrada.length === 0) {
            return 0
        }
        return (precioTotal / listaFiltrada.length);
    }

    const productosTotales = () => {
        return listaFiltrada.length;
    }

    const ordenarPorNombre = () => {
        ordenada = [...listaFiltrada].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setListaFiltrada(ordenada);
    };

    const ordenarPorPrecio = () => {
        ordenada = [...listaFiltrada].sort(
            (a, b) => a.price - b.price
        );
        setListaFiltrada(ordenada);
    };

    const ordenarPorPeso = () => {
        ordenada = [...listaFiltrada].sort(
            (a, b) => a.weight - b.weight
        );
        setListaFiltrada(ordenada);
    };


    const exportar = {
        listaProductos,
        listaFiltrada,
        filtrarPorNombre,
        filtrarPorPeso,
        filtrarPorPrecio,
        limpiarFiltro,
        ordenarPorNombre,
        ordenarPorPrecio,
        ordenarPorPeso,
        productosTotales,
        precioMedio,
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
