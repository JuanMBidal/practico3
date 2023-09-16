import React, { useState, useEffect } from "react";
import Resultado from "./Resultado";
import PartidaFinalizada from './PartidaFinalizada';
import StyledJuego from "../styledComponents/StyledJuego";

//Opciones
import OpcPiedra from '../imagenes/opcPiedra.png';
import OpcTijera from '../imagenes/opcTijera.png';
import OpcPapel from '../imagenes/opcPapel.png';
import StyledOpciones from "../styledComponents/StyledOpciones";




const elecciones = ["piedra", "papel", "tijeras"];

function Juego(prop) {
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [jugadaComputadora, setJugadaComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [partidaFinalizada, setPartidaFinalizada] = useState(false)
  const nombre = prop.nombre;

  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);
  //animacion
  const [animarJugada, setAnimarJugada] = useState(false);


  //Termina la partida si se dan las condiciones.
  useEffect(() =>{
    if ((puntosUsuario === 3) || (puntosComputadora === 3)) {
      setPartidaFinalizada(true);
    }
  }, [puntosUsuario, puntosComputadora]);

  //Reinicia el juego.
  const ReiniciarJuego = () => {
    setJugadaComputadora(null);
    setJugadaUsuario(null);
    setPuntosComputadora(0);
    setPuntosUsuario(0);
    setPartidaFinalizada(false);
  }


  const Jugada = (eleccion) => {


    //Toma las elecciones si la partida no se terminó.
    if (!partidaFinalizada) {
      const randomIndex = Math.floor(Math.random() * 3);
      const jugadaComputadora = elecciones[randomIndex];

      setJugadaUsuario(eleccion);
      setJugadaComputadora(jugadaComputadora);

      //animacion
      setAnimarJugada(true);
      setTimeout(() => {
        setAnimarJugada(false);
      }, 1000);



      //Compara las elecciones.
      if (eleccion === jugadaComputadora) setResultado("Empataste");
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
  }


  return (
    <StyledJuego className="StyledJuego">
      <Resultado animarJugada={animarJugada} jugadaUsuario={jugadaUsuario} jugadaComputadora={jugadaComputadora} resultado={resultado} nombre={nombre} puntosUsuario={puntosUsuario} puntosComputadora={puntosComputadora}/>
      <StyledOpciones className="StyledOpciones">
          <img src={OpcPiedra} alt="opcionPiedra" onClick={() => Jugada("piedra")} draggable='false'></img>
          <img src={OpcPapel} alt="opcionPapel" onClick={() => Jugada("papel")} draggable='false'></img>
          <img src={OpcTijera} alt="opcionTijera" onClick={() => Jugada("tijeras")} draggable='false'></img>
      </StyledOpciones >
      {partidaFinalizada &&
        <PartidaFinalizada puntosComputadora={puntosComputadora} puntosUsuario={puntosUsuario} reiniciarJuego={ReiniciarJuego}/>
      }
    </StyledJuego>
  );

}


export default Juego;
