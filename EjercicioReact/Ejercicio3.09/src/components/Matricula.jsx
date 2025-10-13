import React, { useState } from 'react'
import matriculadosJson from './matriculados.json';
import Discente from "./Discente";
import "./Matricula.css";

const Matricula = () => {

  const [discentes, setDiscentes] = useState(matriculadosJson.discentes);

  // Estado que controla el orden de los discentes por apellido.
  // Por defecto ordena de forma ascendente.
  const [orden, setOrden] = useState(true);

  const mostrar2DAW = () => {
    let discentes = matriculadosJson.discentes.filter(d => d.curso === "2DAW");
    setDiscentes(discentes);
  };

  const mostrarCicloDAW = () => {
    let discentes = matriculadosJson.discentes.filter(d => d.curso.includes("DAW"));
    setDiscentes(discentes);
  }

  const mostrarPrimerCiclo = () => {
    let discentes = matriculadosJson.discentes.filter(d => d.curso.includes("1"));
    setDiscentes(discentes);
  }

  const mostrarDiscentesLectura = () => {
    let discentes = matriculadosJson.discentes.filter(d => d.aficiones.includes("lectura"));
    setDiscentes(discentes);
  }

  const ordenarPorApellidos = () => {
    // Copia del original.
    const discentesCopia = [...discentes];

    // Le he pedido ayuda a copilot para el método localCompare ya en Java se escribe diferente (compareTo).
    if (orden) {
      discentesCopia.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
    } else {
      discentesCopia.sort((a, b) => b.apellidos.localeCompare(a.apellidos));
    }

    setDiscentes(discentesCopia);
    setOrden(!orden);
  };

  // Cambia ambos estados a sus estados originales.
  const reiniciar = () => {
    setDiscentes(matriculadosJson.discentes);
    setOrdenAscendente(true);
  };

  // Simula eliminar el objeto haciendo una copia del estado sin él.
  const desmatricularDiscente = (id) => {
    setDiscentes(discentes.filter(d => d.id !== id));
  };

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <button onClick={mostrar2DAW}>Mostrar 2º DAW</button>
      <button onClick={mostrarCicloDAW}>Mostrar discentes DAW</button>
      <button onClick={mostrarPrimerCiclo}>Mostrar discentes primer ciclo</button>
      <button onClick={mostrarDiscentesLectura}>Discentes Lectura</button>
      <button onClick={ordenarPorApellidos}>
        Ordenar por Apellidos ({orden ? 'Asc' : 'Desc'})
      </button>
      <button onClick={reiniciar}>Reiniciar listado</button>

      {discentes.map(d => (
        <div key={d.id}>
          <Discente {...d} />
          <button onClick={() => desmatricularDiscente(d.id)}>Desmatricular</button>
        </div>
      ))}
    </div>
  );
};

export default Matricula