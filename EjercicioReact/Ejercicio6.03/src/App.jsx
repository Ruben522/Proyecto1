import { React, useState } from "react";
import "./App.css";
import Contenedor from "./components/Contenedor.jsx";
import Head from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Rutas from "./routes/Rutas.jsx";

function App() {
	return (
		<>
			<Contenedor>
				<Head />
				<Rutas />
				<Footer />
			</Contenedor>
		</>
	);
}

export default App;
