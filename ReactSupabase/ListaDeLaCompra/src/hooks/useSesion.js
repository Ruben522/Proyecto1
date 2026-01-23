import { supabaseConexion } from "../supabase/Supabase.js";

export const useSesion = () => {
    const crearCuenta = async (datosSesion) => {
        try {
            const { data, error } =
                await supabaseConexion.auth.signUp({
                    email: datosSesion.email,
                    password: datosSesion.password,
                    options: {
                        data: { name: datosSesion.name },
                    },
                });

            if (error) {
                throw error;
            }
            return data;
            // Se revisa el objeto data por consola.
            console.log(data);
        } catch (error) {
            throw error;
        }
    };
    return { crearCuenta };
};

export default useSesion;
