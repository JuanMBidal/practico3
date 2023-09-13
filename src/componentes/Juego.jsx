import React, { useState } from "react";
import Resultado from "./Resultado";

const elecciones = ["piedra", "papel", "tijeras"];

function Juego(prop) {
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [jugadaComputadora, setJugadaComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);
  const nombre = prop.nombre;


  const Jugada = (eleccion) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const jugadaComputadora = elecciones[randomIndex];

    setJugadaUsuario(eleccion);
    setJugadaComputadora(jugadaComputadora);

    if (eleccion === jugadaComputadora) setResultado("Empate");
    else if (
      (eleccion === "piedra" && jugadaComputadora === "tijeras") ||
      (eleccion === "papel" && jugadaComputadora === "piedra") ||
      (eleccion === "tijeras" && jugadaComputadora === "papel")
    )
      setResultado("Ganaste");
    else setResultado("Perdiste");
  };

  return (
    <div>
      {jugadaUsuario && jugadaComputadora && (
        <Resultado jugadaUsuario={jugadaUsuario} jugadaComputadora={jugadaComputadora} resultado={resultado} nombre={nombre}/>
      )}
      <div>
          <button type="button" onClick={() => Jugada("piedra")}>Piedra</button>
          <button type="button" onClick={() => Jugada("papel")}>Papel</button>
          <button type="button" onClick={() => Jugada("tijeras")}>Tijeras</button>
      </div>
    </div>
  );
}

export default Juego;
