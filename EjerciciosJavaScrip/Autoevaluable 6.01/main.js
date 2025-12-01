"use strict";

window.onload = () => {
	const promesa = new Promise((resolver, rechazar) => {
		setTimeout(() => {
			const numero = Math.floor(Math.random() * 101);
			if (numero % 2 === 0) {
				resolver(numero);
			}
		}, 2000);
	});

	promesa.then(resultado);
};
