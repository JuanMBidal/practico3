function PartidaFinalizada (prop) {

    const ganaUsuario = prop.puntosUsuario > 3 ;

    if  (ganaUsuario) {
        return (
            <div>
              <h2>Partida finalizada</h2>
              <p>Ganaste! </p>
              <button onClick={prop.reiniciarJuego}>Volver a jugar</button>
            </div>
        )
    } else {
        return (
            <div>
              <h2>Partida finalizada</h2>
              <p>Perdiste :( </p>
            <button onClick={prop.reiniciarJuego}>Volver a jugar</button>
            </div>
        )
    }
}

export default PartidaFinalizada;