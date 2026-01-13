import React from "react";
import Menu from "./components/Menu";
import Contenedor from "./components/Contenedor";
import Cabecera from "./components/Cabecera";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";

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
