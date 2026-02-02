import React, {
    createContext,
    useEffect,
    useState,
} from "react";
import useProductos from "../hooks/useProductos.js";
import { validarProducto } from "../library/validar.js";

const productos = createContext();

const ProveedorProductos = ({ children }) => {
    const productoInicial = {
        name: "",
        price: Number(""),
        weight: Number(""),
        image_url: "",
    };
    const productosIniciales = [];
    const mensajeInicial = "";
    const errorInicial = "";
    let resultadoFiltro = "";
    let ordenada = [];

    const [producto, setProducto] = useState(productoInicial);
    const [listaProductos, setListaProductos] = useState(productosIniciales);
    const [listaFiltrada, setListaFiltrada] = useState(productosIniciales)
    const [mensaje, setMensaje] = useState(mensajeInicial);
    const [error, setError] = useState(errorInicial);
    const { listarProductos, crearProductos, editarProducto, eliminarProducto } = useProductos();

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

    const crearNuevoProducto = async (datos) => {
        try {
            const respuesta = await crearProductos(datos);
            const nuevosProductos = await listarProductos();
            setListaProductos(nuevosProductos);
            setListaFiltrada(nuevosProductos);
        } catch (error) {
            setError("Error al crear el producto.");
        }
    };
    const editarProductos = async (datos) => {
        try {
            const respuesta = await editarProducto(datos);
            const nuevosDatos = await listarProductos();
            setListaProductos(nuevosDatos);
            setListaFiltrada(nuevosDatos);
            setMensaje("Producto editado correctamente.");

        } catch (error) {
            setError("Error al editar el producto.");
        }
    };

    const borrarProducto = async (id) => {
        try {
            const respuesta = await eliminarProducto(id);
            const datos = await listarProductos();
            setListaProductos(datos);
            setListaFiltrada(datos);
            setMensaje("Producto eliminado correctamente.");

        } catch (error) {
            setError("Error al eliminar el producto.");
        }
    };

    const actualizarDato = (evento) => {
        const { name, value } = evento.target;
        setProducto((producto) => ({
            ...producto,
            [name]: value,
        }));
    };

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

    const limpiarFormulario = () => {
        setProducto(productoInicial);
        setMensaje("");
        setError("");
    };

    const enviarFormularioProducto = async () => {
        setError("");
        setMensaje("");
        const errores = validarProducto(producto);

        if (errores.length > 0) {
            setError(errores.join(" "));
            return;
        }
        try {
            await crearNuevoProducto(producto);
            limpiarFormulario();
            setMensaje("Producto creado correctamente.");
        } catch (error) {
            setError("Error al crear el producto.");
        }
    };

    const cargarProductoPorId = (id) => {
        const productoEncontrado = listaProductos.find((prod) => prod.id === (id));
        if (productoEncontrado) {
            setProducto(productoEncontrado);
        }
    }

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
        crearNuevoProducto,
        editarProductos,
        borrarProducto,
        producto,
        actualizarDato,
        enviarFormularioProducto,
        limpiarFormulario,
        cargarProductoPorId,
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
