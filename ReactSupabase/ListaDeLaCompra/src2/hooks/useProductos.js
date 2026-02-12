import { supabaseConexion } from "../supabase/Supabase.js";

const useProductos = () => {
    const listarProductos = async () => {
        try {
            const { data, error } = await supabaseConexion
                .from("productos")
                .select("*");
            return data;
        } catch (error) {
            throw error;
        }
    };

    const crearProductos = async (datos) => {
        try {
            const { data, error } = await supabaseConexion
                .from("productos")
                .insert(datos);
            if (error) {
                throw error;
            }
            return data;
        } catch (error) {
            throw error;
        }
    };

    const editarProducto = async (datos) => {
        try {
            const { data, error } = await supabaseConexion
                .from("productos")
                .update(datos)
                .eq("id", datos.id);
            if (error) {
                throw error;
            }
            return data;
        } catch (error) {
            throw error;
        }
    };

    const eliminarProducto = async (id) => {
        try {
            const { data, error } = await supabaseConexion
                .from("productos")
                .delete()
                .eq("id", id);
            if (error) {
                throw error;
            }
            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        listarProductos,
        crearProductos,
        editarProducto,
        eliminarProducto,
    };
};

export default useProductos;
