import React from "react";
import Listado from "./components/Listado";
import ContadorLimite from "./components/ContadorLimite";
import ContadorLikes from "./components/ContadorLikes";

function App() {
  // No sabía como mostrar los componentes seguidos uno detrás de otro.
  // Esta forma de hacerlo la saqué de ChatGPT.
  return <div>
    <Listado />
    <ContadorLimite />
    <ContadorLikes />
  </div>;
}

export default App;
