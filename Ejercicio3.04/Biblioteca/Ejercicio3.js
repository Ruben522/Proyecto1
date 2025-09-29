const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];

const devolverArrayOriginal = () => {
  return usuarios;
}

// Devuelve un array usuarios con un nuevo usuario.
const insertarUsuario = (usuarios, usuario) => {
  return [...usuarios, usuario];
}

// Devuelve un array usuarios con los usuarios mayores de edad.
const usuariosMayoresDeEdad = (usuarios) => {
  return usuarios.filter(usuario => usuario.preferencias.edad >= 18);
}

// Devuelve un array usuarios con los usuarios que tienen correo de Yahoo.
const usuariosCorreoYahoo = (usuarios) => {
  return usuarios.filter(usuario => usuario.contacto.correoelectronico.includes("@yahoo.com"));
}

// Devuelve un array usuarios con los usuarios que tienen tema claro, viven en España y son mayores de edad.
const usuariosTemaClaroEspannaMas18 = (usuarios) => {
  return usuarios.filter(usuario => usuario.preferencias.tema === "claro"
    && usuario.contacto.direccion.pais === "España"
    && usuario.preferencias.edad > 18
  );
}

// Devuelve un array usuarios con los usuarios a los que les falta un dato.
const usuariosDatosIncompletos = (usuarios) => {
  return usuarios.filter(usuario => usuario.contacto.telefono === "" ||
    usuario.contacto.direccion.calle === "" ||
    usuario.contacto.direccion.localidad === "" ||
    usuario.contacto.direccion.pais === "" ||
    usuario.contacto.correoelectronico === ""
  );
}

// Devuelve un array usuarios con una nueva propiedad apellido.
const agregarClaseApellido = (usuarios) => {
  return usuarios.map(usuario => ({
    ...usuario,
    apellido: "No indicado"
  }));
}

// Devuelve un array usuarios con una nueva propiedad dirección.
const agregarCodigoADireccion = (usuarios) => {
  return usuarios.map(usuario => ({
    ...usuario,
    contacto: {
      ...usuario.contacto,
      direccion: {
        ...usuario.contacto.direccion,
        codigoPostal: "00000"
      }
    }
  }));
}

export { devolverArrayOriginal, insertarUsuario, usuariosMayoresDeEdad, usuariosCorreoYahoo, usuariosTemaClaroEspannaMas18, usuariosDatosIncompletos, agregarClaseApellido, agregarCodigoADireccion };