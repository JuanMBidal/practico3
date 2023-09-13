import './App.css';
import React, {useState} from "react";
import Juego from './componentes/Juego.jsx'
import NombreJugador from './componentes/NombreJugador.jsx'

function App() {

  const [nombre, setNombre] = useState("")

  const CambiarNombre = (nombre) => {
    setNombre(nombre);
  }


  return (
    <div className="App">
      <header className="App-header">
          {nombre==="" ? (
            <NombreJugador onComenzar={CambiarNombre} />
            ):(
              <Juego nombre={nombre} />
            )}
      </header>
    </div>
  );
}

export default App;
