import { supabaseConexion } from "../supabase/Supabase.js";

const crearCuenta = async (datosSesion) => {
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        name: datosSesion.name,
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        return `Se enviará un mensaje de confirmación a su correo. Revise spam si no ve el mensaje
                en el buzón principal.`
      }
      // Se revisa el objeto data por consola.
      console.log(data);
    } catch (error) {
      setErrorUsuario(error.message);
    }
};

export default {
    crearCuenta,
    
 }

