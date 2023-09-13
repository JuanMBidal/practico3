import React, {useState} from "react";

function NombreJugador ({onComenzar}) {

    const [nombre, setNombre] = useState('')

    const Comenzar = () => {
        if (nombre !== "") {
            onComenzar(nombre);
            console.log(nombre);
        }
        else {alert("Nombre Invalido");}
    }


    return (
    <div>
     <input onChange={(e) => setNombre(e.target.value)} type="text" value={nombre} ></input>
     <button onClick={Comenzar}>Comenzar</button>
    </div>
    )
}

export default NombreJugador;