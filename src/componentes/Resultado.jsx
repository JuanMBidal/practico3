
function Resultado (prop) {


    return (
     <>
       <p>Puntos de {prop.nombre}: {prop.puntosUsuario}</p>
       <p>Puntos de la computadora: {prop.puntosComputadora}</p>
       <h2>{prop.nombre} eligio: {prop.jugadaUsuario} </h2>
       <h2>La computadora eligio: {prop.jugadaComputadora} </h2>
       <h2>El resultado es: {prop.resultado}</h2>
     </>
     )
 }
 
 export default Resultado;