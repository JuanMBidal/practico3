import piedra from '../imagenes/piedra.png';
import papel from '../imagenes/papel.png';
import tijeras from '../imagenes/tijeras.png';
import piedraMirrored from '../imagenes/piedraMirrored.png';
import papelMirrored from '../imagenes/papelMirrored.png';
import tijerasMirrored from '../imagenes/tijerasMirrored.png';
import StyledResultado from '../styledComponents/StyledResultado';


function Resultado (prop) {

  //Constantes para las imágenes que aparecen antes de comenzar a jugar.
  const imagenDefault = piedra;
  const imagenDefaultMirrored = piedraMirrored;
  
  //Constante para comprobar si la partida todavía no comienza.
  const sinEmpezar = ((prop.jugadaComputadora === null) && (prop.jugadaUsuario === null) );

  //Constantes para mostrar la imagen correspondiente con la jugada.
  const imagenJugadaUsuario = (prop.jugadaUsuario && ({
    piedra: piedra,
    papel: papel,
    tijeras: tijeras,
  }[prop.jugadaUsuario])) || imagenDefault;

  const imagenJugadaComputadora = (prop.jugadaComputadora && ({
    piedra: piedraMirrored,
    papel: papelMirrored,
    tijeras: tijerasMirrored,
  }[prop.jugadaComputadora])) || imagenDefaultMirrored;


    return (
     <StyledResultado>
        {!sinEmpezar && (<h2>{prop.resultado} la ronda!</h2>)}
        <div className='puntos'>
          <div className='puntosUsuario'>
            <p>{prop.nombre}</p>
            <h2>{prop.puntosUsuario}</h2>
          </div>
          <div className='puntosComputadora'>
            <p>Computadora</p>
            <h2>{prop.puntosComputadora}</h2>
          </div>
        </div>
        <div className='jugada'>
          <img draggable='false' className={`${prop.animarJugada ? 'bounce' : ''}`} src={imagenJugadaUsuario} alt='JugadaDeUsuario' ></img>
          <img draggable='false' className={`${prop.animarJugada ? 'bounce' : ''}`} src={imagenJugadaComputadora} alt='jugadaDeComputadora'></img>
        </div>
     </StyledResultado>
     )
 }
 
 export default Resultado;