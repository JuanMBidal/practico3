import React, {useState} from "react";
import StyledNombreJugador from '../styledComponents/StyledNombreJugador';

function NombreJugador ({onComenzar}) {

    const [nombre, setNombre] = useState('')


    //Pasa el nombre elegido a App por la funcion onComenzar.
    const Comenzar = () => {
        if (nombre !== "") {
            onComenzar(nombre);
        }
        else {alert("Nombre Inválido");}
    }


    return (
    <StyledNombreJugador>
        <h1>Piedra, Papel o Tijera</h1>
        <h3>Reglas</h3>
        <p>El jugador debe elegir una de tres opciones para competir contra la computadora.</p>
        <p>Piedra gana a tijera.</p>
        <p>Papel gana a piedra.</p>
        <p>Tijera gana a papel.</p>
        <p>Si los dos jugadores eligen la misma opción la jugada termina en empate.</p>
        <p>El ganador de cada ronda suma un punto, la partida termina cuando uno de los jugadores consigue tres puntos. </p>
        <br/>
        <h3>Ingresa el nombre del jugador</h3>
        <input maxLength={10} onChange={(e) => setNombre(e.target.value)} type="text" value={nombre} ></input>
        <br/>
        <button onClick={Comenzar}>Comenzar</button>
    </StyledNombreJugador>
    )
}

export default NombreJugador;