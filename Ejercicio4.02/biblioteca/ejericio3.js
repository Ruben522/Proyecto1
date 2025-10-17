"use stric";

const crearParrafos = () => {
	for (let i = 1; i <= 5; i++) {
		const p = document.createElement("p");
		p.textContent = `Párrafo ${i}`;
		document.body.appendChild(p);
	}
};

const colorAleatorio = () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	let color = `rgb(${r},${g},${b})`;
	return color;
};

const posicionAleatoria = () => {
	return Math.floor(Math.random() * 5);
};

const cambiarAleatoriamente = () => {
	let parrafos = document.getElementsByTagName("p");
	parrafos[posicionAleatoria()].setAttribute(
		"style",
		`background-color: ${colorAleatorio()}`
	);
};
export { crearParrafos, cambiarAleatoriamente };
