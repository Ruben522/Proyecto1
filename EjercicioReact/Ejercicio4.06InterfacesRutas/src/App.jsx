import { useState } from 'react'
import Rutas from './routes/Rutas'
import Menu from './components/Menu'
import Contenedor from './components/Contenedor'
import './App.css'

function App() {

  return (
    <>
    <Contenedor>
      <Contenedor>
        <Menu />
      </Contenedor>
      <Contenedor>
        <Rutas />
      </Contenedor>
    </Contenedor>
    </>
  )
}

export default App
