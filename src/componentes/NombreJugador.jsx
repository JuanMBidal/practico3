import React, {useState} from "react";

function NombreJugador ({onComenzar}) {

    const [nombre, setNombre] = useState('')

    const Comenzar = () => {
        if (nombre !== "") {
            onComenzar(nombre);
        }
        else {alert("Nombre Inválido");}
    }


    return (
    <div>
        <p>Ingresa el nombre del jugador</p>
     <input onChange={(e) => setNombre(e.target.value)} type="text" value={nombre} ></input>
     <button onClick={Comenzar}>Comenzar</button>
    </div>
    )
}

export default NombreJugador;