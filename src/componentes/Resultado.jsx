
function Resultado (prop) {

    return (
     <>
       <h2>{prop.nombre} eligio: {prop.jugadaUsuario} </h2>
       <h2>La computadora eligio: {prop.jugadaComputadora} </h2>
       <h2>El resultado es: {prop.resultado}</h2>
     </>
     )
 }
 
 export default Resultado;