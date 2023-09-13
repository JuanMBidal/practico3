import React, { useState, useEffect } from "react";
import Resultado from "./Resultado";
import PartidaFinalizada from './PartidaFinalizada';

const elecciones = ["piedra", "papel", "tijeras"];

function Juego(prop) {
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [jugadaComputadora, setJugadaComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [partidaFinalizada, setPartidaFinalizada] = useState(false)
  const nombre = prop.nombre;

  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);

  useEffect(() =>{
    if ((puntosUsuario === 3) || (puntosComputadora === 3)) {
      setPartidaFinalizada(true);
    }
  }, [puntosUsuario, puntosComputadora]);

  const ReiniciarJuego = () => {
    setJugadaComputadora(null);
    setJugadaUsuario(null);
    setPuntosComputadora(0);
    setPuntosUsuario(0);
    setPartidaFinalizada(false);
  }


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
    ) {
      setResultado("Ganaste");
      setPuntosUsuario(puntosUsuario + 1);
    } else { 
      setResultado("Perdiste");
      setPuntosComputadora(puntosComputadora + 1);
    }
  }

  return (
    <div>
      {partidaFinalizada ? (
        <PartidaFinalizada puntosComputadora={puntosComputadora} puntosUsuario={puntosUsuario} reiniciarJuego={ReiniciarJuego}/>
      ): (
        <div>
          {jugadaUsuario && jugadaComputadora && (
        <Resultado jugadaUsuario={jugadaUsuario} jugadaComputadora={jugadaComputadora} resultado={resultado} nombre={nombre} puntosUsuario={puntosUsuario} puntosComputadora={puntosComputadora}/>
      )}
      <div>
          <button type="button" onClick={() => Jugada("piedra")}>Piedra</button>
          <button type="button" onClick={() => Jugada("papel")}>Papel</button>
          <button type="button" onClick={() => Jugada("tijeras")}>Tijeras</button>
      </div>
        </div>
      )}
    </div>
  );
}

export default Juego;
