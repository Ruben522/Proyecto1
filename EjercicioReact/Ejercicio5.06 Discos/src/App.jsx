import React from "react";
import Menu from "../../Ejercicio6.05/src/components/Menu";
import Contenedor from "../../Ejercicio6.05/src/components/Contenedor";
import Cabecera from "../../Ejercicio6.05/src/components/Cabecera";
import Contenido from "../../Ejercicio6.05/src/components/Contenido";
import Footer from "../../Ejercicio6.05/src/components/Footer";

function App() {
	return (
		<>
			<Contenedor>
				<Cabecera />
				<Menu />
				<Contenido />
				<Footer />
			</Contenedor>
		</>
	);
}

export default App;
