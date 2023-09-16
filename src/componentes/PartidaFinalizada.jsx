import StyledPartidaFinalizada from "../styledComponents/StyledPartidaFinalizada";

function PartidaFinalizada (prop) {

    const ganaUsuario = (prop.puntosUsuario === 3);

    if  (ganaUsuario) {
        return (
            <StyledPartidaFinalizada>
              <h2>PARTIDA FINALIZADA</h2>
              <p>Ganaste! </p>
              <button onClick={prop.reiniciarJuego}>Volver a jugar</button>
            </StyledPartidaFinalizada>
        )
    } else {
        return (
            <StyledPartidaFinalizada>
              <h2>PARTIDA FINALIZADA</h2>
              <p>Perdiste :( </p>
              <button onClick={prop.reiniciarJuego}>Volver a jugar</button>
            </StyledPartidaFinalizada>
        )
    }
}

export default PartidaFinalizada;