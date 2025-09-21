import React from 'react';
import Pelicula from './components/Practica2.03/Pelicula';
import Interprete from './components/Practica2.03/Interprete';

const App = () => {
  return (
    <Pelicula
      titulo="Rocky"
      direccion="Jhon G. Avildsen"
      cartel="https://pics.filmaffinity.com/rocky-253483905-large.jpg"
      resumen="Rocky Balboa es un desconocido boxeador a quien se le ofrece la posibilidad de pelear por el título mundial de los pesos pesados. Con una gran fuerza de voluntad, Rocky se prepara concienzudamente para el combate y también para los cambios que acabarán produciéndose en su vida."
    >
      <Interprete
        nombre="Sylvester Stallone"
        foto="https://imgs.search.brave.com/OAZ_5QPxKkEq-xIgWD449ZOlZ-uWNov01ARS87SkbX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MjA3ODkzNC9kZS9m/b3RvL2xvcy1hbmdl/bGVzLWNhbGlmb3Ju/aWEtc3lsdmVzdGVy/LXN0YWxsb25lLWF0/dGVuZHMtd2FybmVy/LWJyb3MtcHJlbWll/cmUtb2YtdGhlLXN1/aWNpZGUtc3F1YWQt/YXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXlwdGZUNEJJ/RXdmWmhlWEZuenZ2/aEJCaEZWWUlZaUxU/cGtvWnhDMzNDZWM9"
      >
        Interpreta a Rocky Balboa, un boxeador de Filadelfia que tiene la oportunidad de pelear por el título mundial de los pesos pesados.
      </Interprete>
      <Interprete
        nombre="Carl Weathers"
        foto="https://pics.filmaffinity.com/carl_weathers-092019957004786-nm_200.jpg"
      >
        Interpreta a Apollo Creed, el campeón mundial de los pesos pesados que elige a Rocky como su oponente en una pelea de exhibición.
      </Interprete>
    </Pelicula>
  );
};

export default App;
