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
    return { listarProductos };
};

export default useProductos;
