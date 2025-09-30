"use strict";

import { mostrarArray, mostrarEnMayusculas, mostrarRevesAlfabeticamente, crearJSONPorNombre } from "./Biblioteca/ejercicio1.js";
import { generarNumeroAleatorio1a10, generarArrayAleatorio, arrayNumerosMayor5 } from "./Biblioteca/ejercicio2.js";
import { devolverArrayOriginal ,insertarUsuario, usuariosMayoresDeEdad, usuariosCorreoYahoo, usuariosTemaClaroEspannaMas18, usuariosDatosIncompletos, agregarClaseApellido, agregarCodigoADireccion } from "./Biblioteca/Ejercicio3.js";

/*
// Ejercicio 1
let nombresPropios = ["Ruben", "Ana", "Carlos", "Míriam", "Paco"];
mostrarArray(mostrarEnMayusculas(nombresPropios));
let nombresPropiosReves = mostrarRevesAlfabeticamente(nombresPropios);
mostrarArray(mostrarRevesAlfabeticamente(nombresPropiosReves));
let nombresPropiosJSON = crearJSONPorNombre(nombresPropios);
mostrarArray(nombresPropiosJSON);
*/

/*
// Ejercicio 2
console.log(generarNumeroAleatorio1a10());
let array1 = generarArrayAleatorio();
let array2 = generarArrayAleatorio();
let array3 = generarArrayAleatorio();
console.log("Array 1:");
mostrarArray(array1);
console.log("Array 2:");
mostrarArray(array2);
console.log("Array 3:");
mostrarArray(array3);

let arrayCombinado = arrayNumerosMayor5(...array1, ...array2, ...array3);
mostrarArray(arrayCombinado);
*/

/*
// Ejercicio 3
let usuario = 
    {
  nombre: "Rubén",
    preferencias: { tema: "oscuro", idioma: "español", edad: 23 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  };

const arrayUsuariosOriginal = devolverArrayOriginal();
let arrayUsuarios = insertarUsuario(arrayUsuariosOriginal, usuario);
mostrarArray(arrayUsuarios);
mostrarArray(usuariosMayoresDeEdad(arrayUsuarios));
mostrarArray(usuariosCorreoYahoo(arrayUsuarios));
mostrarArray(usuariosTemaClaroEspannaMas18(arrayUsuarios));
mostrarArray(usuariosDatosIncompletos(arrayUsuarios));
mostrarArray(agregarClaseApellido(arrayUsuarios));
mostrarArray(agregarCodigoADireccion(arrayUsuarios));
*/