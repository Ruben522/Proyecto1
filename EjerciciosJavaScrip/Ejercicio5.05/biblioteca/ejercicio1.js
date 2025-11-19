"use strict";

// Valida que el nombre tenga 5 caracteres o más.
const validarNombre = (nombre) => {
	return nombre.length >= 5;
};

// Comprueba si hay algún caracter.
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

// Comprueba si hay seleccionado algún género (Array).
const tieneGenero = (generos) => {
	return generos.length !== 0;
};

// Valida según la expresión regular.
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

const limpiarFormulario = (formulario) => {
	formulario.reset();
};

const mostrarErrores = (divInfo, errores) => {
	divInfo.style.display = "block";
	divInfo.innerHTML = errores;
};

const mostrarTodoCorrecto = (divInfo) => {
	let mensaje = "Todo correcto";
	divInfo.style.display = "block";
	divInfo.innerHTML = mensaje;
};

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

const recogerNombreFiltrar = (formulario) => {
	return formulario.nombrefiltrar.value;
};

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

const validarFormulario = (datos) => {
	let errores = [];

	if (estaVacio(datos.nombre) || !validarNombre(datos.nombre))
		errores = [...errores, "El nombre debe tener al menos 5 caracteres."];

	if (estaVacio(datos.compositor) || !validarNombre(datos.compositor))
		errores = [...errores, "El compositor debe tener al menos 5 caracteres."];

	if (
		estaVacio(datos.fecha) ||
		!sonNumeros(datos.fecha) ||
		!validarFecha(datos.fecha)
	)
		errores = [...errores, "El año debe tener 4 dígitos."];

	if (!tieneGenero(datos.generosSeleccionados))
		errores = [...errores, "Debes seleccionar al menos un género."];

	if (estaVacio(datos.localizacion) || !validarUbicacion(datos.localizacion))
		errores = [...errores, "La localización debe tener el formato ES-001AA."];

	return errores;
};

const guardarDiscoJSON = (datosFormulario) => {
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
const estructuraDisco = (disco) => {
	return `
        <div class="disco">
			<img class="borrar" src="./img/borrar.png" id="${disco.nombre}">
            <h3>${disco.nombre}</h3>
			<img src="${disco.caratula}" />
            <p><strong>Compositor:</strong> ${disco.compositor}</p>
            <p><strong>Año:</strong> ${disco.fecha}</p>
            <p><strong>Géneros:</strong> ${disco.generos.join(", ")}</p>
            <p><strong>Localización:</strong> ${disco.localizacion}</p>
            <p><strong>Prestado:</strong> ${disco.prestado ? "Sí" : "No"}</p>
        </div>
    `;
};

// Muestra todos los discos
const mostrarDiscos = (arrayDiscos, divMostrar) => {
	let contenido = "";
	for (let i = 0; i < arrayDiscos.length; i++) {
		let disco = arrayDiscos[i];
		contenido += estructuraDisco(disco);
	}
	divMostrar.innerHTML = contenido;
};

// Filtra mediante el nombre que nos pasa el usuario.
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

const borrarDisco = (arrayDiscos, nombreDisco) => {
	return arrayDiscos.filter((disco) => disco.nombre !== nombreDisco);
};

const discosVacios = (discosJSON) => {
	return discosJSON === null;
};

const guardarEnLocalStorage = (arrayDiscos) => {
	const discosJSON = JSON.stringify(arrayDiscos);
	localStorage.setItem("discos", discosJSON);
};

const cargarLocalStorage = () => {
	const discosJSON = localStorage.getItem("discos");
	if (discosVacios(discosJSON)) {
		return [];
	}
	const data = JSON.parse(discosJSON);
	if (Array.isArray(data)) {
		return data;
	}

	return [];
};

export {
	recogerDatosFormulario,
	validarFormulario,
	guardarDiscoJSON,
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
