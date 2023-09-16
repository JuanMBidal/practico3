# Práctico N3: Piedra, Papel o Tijera con REACT.

## Creación de componentes básicos.

### Los subcomponentes se encuentran dentro de la carpeta **componentes**.

```
└── componentes
    ├── Juego.jsx
    ├── NombreJugador.jsx
    ├── PartidaFinalizada.jsx
    └── Resultado.jsx
```

## Obtención del nombre del jugador.

**NombreJugador** Captura el nombre ingresado en el input y lo envía al componente App usando la función *onComenzar* que se pasa como prop de NombreJugador.

## Selección de la opción del jugador y del oponente.

**Juego** Contiene las opciones para obtener las jugadas.

```javascript
if (!partidaFinalizada) {
      const randomIndex = Math.floor(Math.random() * 3);
      const jugadaComputadora = elecciones[randomIndex];

      setJugadaUsuario(eleccion);
      setJugadaComputadora(jugadaComputadora);
```
Captura las jugadas del usuario y de la computadora.

## Determinación del ganador y actualización del marcador.

En **Juego**:

```javascript
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
```
Determina el ganador de la jugada y suma puntos.

La información se pasa como props a  **Resultado**, donde se muestra en la pantalla.

## Control del juego y finalización.

```javascript
useEffect(() =>{
    if ((puntosUsuario === 3) || (puntosComputadora === 3)) {
      setPartidaFinalizada(true);
    }
  }, [puntosUsuario, puntosComputadora]);
```
Usé el hook Effect para terminar el juego cuando alguien llegue a tres puntos.

## Anunciar al ganador y reiniciar el juego.
**PartidaFinalizada** Se renderiza cuando la partida termina. Muestra el resultado de la partida y un botón para inciar una nueva.

## Estilos CSS con Styled Components.
En la carpeta **styledComponents** se encuentran todos los archivos para dar el css a los componentes usando la librería *styled-components*.
