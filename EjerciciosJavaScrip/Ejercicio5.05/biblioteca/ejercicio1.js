"use strict";

// Valida que el nombre tenga 5 caracteres o más.
const validarNombre = (nombre) => {
	return nombre.length >= 5;
};

// Comprueba si hay algún carácter.
const estaVacio = (caracteres) => {
	return caracteres === "";
};

// Valida que el año tenga 4 dígitos.
const validarFecha = (fecha) => {
	return fecha.length === 4 && sonNumeros(fecha);
};

// Comprueba que sean números.
const sonNumeros = (numeros) => {
	return !isNaN(numeros);
};

// Comprueba si se ha seleccionado algún género (Array).
const tieneGenero = (generos) => {
	return generos.length !== 0;
};

// Valida la ubicación usando una expresión regular.
const validarUbicacion = (ubicacion) => {
	let expresion = /^ES-\d{3}[A-Z]{2}$/;

	return expresion.test(ubicacion);
};

// Comprueba si hay errores.
const tieneErrores = (errores) => {
	return errores.length > 0;
};

// Elimina todo el contenido del div información que contiene los errores.
const limpiarInformacion = (divInfo) => {
	divInfo.innerHTML = "";
};

// Elimina los datos que escribió o marcó el usuario.
const limpiarFormulario = (formulario) => {
	formulario.reset();
};

// Muestra los errores en el div que entra por parámetro.
const mostrarErrores = (divInfo, errores) => {
	divInfo.style.display = "block";
	divInfo.innerHTML = errores;
};

// Muestra un mensaje predeterminado en el div que entra por parámetro.
const mostrarTodoCorrecto = (divInfo) => {
	let mensaje = "Todo correcto";
	divInfo.style.display = "block";
	divInfo.innerHTML = mensaje;
};

// Obtiene los datos de los checkbox que han sido seleccionados
// en el formulario que entra por parámetro.
const obtenerGenerosSeleccionados = (formulario) => {
	const generos = formulario.generos;
	let seleccionados = [];

	for (let i = 0; i < generos.length; i++) {
		if (generos[i].checked === true) {
			seleccionados = [...seleccionados, generos[i]];
		}
	}

	return seleccionados;
};

// Devuelve el valor del campo nombreFiltrar del formulario.
const recogerNombreFiltrar = (formulario) => {
	return formulario.nombrefiltrar.value;
};

// Devuelve los datos del formulario que entra por parámetro como un objeto.
const recogerDatosFormulario = (formulario) => {
	return {
		nombre: formulario.nombre.value,
		compositor: formulario.compositor.value,
		fecha: formulario.number.value,
		localizacion: formulario.localizacion.value,
		caratula: formulario.caratula.value,
		prestado: formulario.prestado.checked,
		generosSeleccionados: obtenerGenerosSeleccionados(formulario),
	};
};

// Valida todos los campos del formulario y devuelve un array vacío
// o un array de string de mensajes de error.
const validarFormulario = (datos) => {
	let errores = [];

	if (estaVacio(datos.nombre) || !validarNombre(datos.nombre))
		errores = [...errores, "El nombre debe tener al menos 5 caracteres."];

	if (estaVacio(datos.compositor) || !validarNombre(datos.compositor))
		errores = [...errores, "El compositor debe tener al menos 5 caracteres."];

	if (estaVacio(datos.fecha) || !validarFecha(datos.fecha))
		errores = [...errores, "El año debe tener 4 dígitos."];

	if (!tieneGenero(datos.generosSeleccionados))
		errores = [...errores, "Debes seleccionar al menos un género."];

	if (estaVacio(datos.localizacion) || !validarUbicacion(datos.localizacion))
		errores = [...errores, "La localización debe tener el formato ES-001AA."];

	return errores;
};

// Crea un objeto a partir de los datos del formulario que entra por parámetro.
const crearObjetoDisco = (datosFormulario) => {
	let generos = [];

	for (let i = 0; i < datosFormulario.generosSeleccionados.length; i++) {
		generos = [...generos, datosFormulario.generosSeleccionados[i].value];
	}
	return {
		nombre: datosFormulario.nombre,
		compositor: datosFormulario.compositor,
		fecha: datosFormulario.fecha,
		generos: generos,
		localizacion: datosFormulario.localizacion,
		prestado: datosFormulario.prestado,
		caratula: datosFormulario.caratula,
	};
};

// Devuelve la estructura de un disco con sus datos para mostrarlo en el DOM.
const estructuraDisco = (disco) => {
	return `<div class="disco">
			<img class="borrar" src="./img/borrar.png" id="${disco.nombre}">
            <h3>${disco.nombre}</h3>
			<img src="${disco.caratula}" />
            <p><strong>Compositor:</strong> ${disco.compositor}</p>
            <p><strong>Año:</strong> ${disco.fecha}</p>
            <p><strong>Géneros:</strong> ${disco.generos.join(", ")}</p>
            <p><strong>Localización:</strong> ${disco.localizacion}</p>
            <p><strong>Prestado:</strong> ${disco.prestado ? "Sí" : "No"}</p>
        </div>`;
};

// Muestra todos los discos.
const mostrarDiscos = (arrayDiscos, divMostrar) => {
	let contenido = "";
	for (let i = 0; i < arrayDiscos.length; i++) {
		let disco = arrayDiscos[i];
		contenido += estructuraDisco(disco);
	}
	divMostrar.innerHTML = contenido;
};

// Filtra mediante el nombre que nos pasa el usuario por parámetro.
const filtrarDisco = (nombre, arrayDiscos, divFiltrado) => {
	let contenido = "";
	for (let i = 0; i < arrayDiscos.length; i++) {
		let disco = arrayDiscos[i];
		if (disco.nombre === nombre) {
			contenido += estructuraDisco(disco);
		}
	}
	divFiltrado.innerHTML = contenido;
};

// Devuelve un array con todos los discos excepto el que coincide
// con el nombre recibido por parámetro.
const borrarDisco = (arrayDiscos, nombreDisco) => {
	return arrayDiscos.filter((disco) => disco.nombre !== nombreDisco);
};

// Valida si hay algún disco guardado.
const discosVacios = (discosJSON) => {
	return discosJSON === null;
};

// Guarda los discos en el localStorage.
const guardarEnLocalStorage = (arrayDiscos) => {
	const discosJSON = JSON.stringify(arrayDiscos);
	localStorage.setItem("discos", discosJSON);
};

// Carga los discos guardados en el localStorage.
const cargarLocalStorage = () => {
	const discosJSON = localStorage.getItem("discos");
	if (discosVacios(discosJSON)) {
		return [];
	}
	const discos = JSON.parse(discosJSON);
	
	return discos;
};

export {
	recogerDatosFormulario,
	validarFormulario,
	crearObjetoDisco,
	tieneErrores,
	limpiarInformacion,
	mostrarErrores,
	mostrarDiscos,
	mostrarTodoCorrecto,
	filtrarDisco,
	recogerNombreFiltrar,
	borrarDisco,
	limpiarFormulario,
	guardarEnLocalStorage,
	cargarLocalStorage,
};
