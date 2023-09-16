import './App.css';
import React, {useState} from "react";
import Juego from './componentes/Juego.jsx'
import NombreJugador from './componentes/NombreJugador.jsx'

function App() {

  const [nombre, setNombre] = useState("")

  //Recibe el nombre desde NombreJugador.
  const CambiarNombre = (nombre) => {
    setNombre(nombre);
  }


  return (
    <div className="App">
          {nombre==="" ? (
            <NombreJugador onComenzar={CambiarNombre} />
            ):(
              <Juego nombre={nombre} />
            )}
    </div>
  );
}

export default App;
