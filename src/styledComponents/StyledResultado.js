import styled from "styled-components";

const StyledResultado = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 90vh;
    color: blanchedalmond;

    * img {
        height: 30vh;
    }

    .imagenJugadaComputadora {
        transform: rotateY(180deg);
    }

    .puntos {
        display: inline-flex;
        width: 100vh;
        color: blanchedalmond;
        font-size: 4vh;
        justify-content: space-between;
        align-content: space-between;
        column-gap: 25vh;
        font-family: fantasy
    };

    .puntosComputadora {
        width: 30vh;
    }

    .puntosUsuario {
        width: 30vh;
    }

    .puntosUsuario h2{
        justify-self: end;
    }

    .jugada {
        width: 100vh;
        display: flex;
        justify-content: space-around;
        column-gap: 10vh;
        padding-bottom: 5vh;
    }

    //Animacion

    .bounce {
        animation-name: bounce;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        }

        @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }




`;

export default StyledResultado;