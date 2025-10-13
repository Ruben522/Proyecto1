import React, { useState } from 'react'
import matriculadosJson from './matriculados.json';
import Discente from "./Discente";
import "./Matricula.css";

const Matricula = () => {

    const [discentes, setDiscentes] = useState(matriculadosJson.discentes);

    const mostrarTodos = () => setDiscentes(matriculadosJson.discentes);

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

    return (
    <div>
      <h1>Ejercicio 1</h1>
        <button onClick={mostrarTodos}>Mostrar todos</button>
        <button onClick={mostrar2DAW}>Mostrar 2º DAW</button>
        <button onClick={mostrarCicloDAW}>Mostrar discentes DAW</button>
        <button onClick={mostrarPrimerCiclo}>Mostrar discentes primer ciclo</button>
        <button onClick={mostrarDiscentesLectura}>Discentes Lectura</button>

        {discentes.map(d => (
          <Discente key={d.id} {...d} />
        ))}
    </div>
  );
};

export default Matricula