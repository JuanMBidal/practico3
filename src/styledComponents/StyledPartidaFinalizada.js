import styled from "styled-components";

const StyledPartidaFinalizada = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  top: 50%;
  left: 50%;
  height: 50vh;
  width: 45vh;
  transform: translate(-50%, -50%);
  background-color: rgba(212, 187, 127, 0.5);
  border: 4px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  border-radius: 12px;

  h2 {
    font-size: 5vh;
    font-weight: bolder;
    color: black;
    -webkit-text-stroke: 1px crimson;
  }


  p{
    font-size: 4vh;
    font-weight: bold;
  }

  button {
    width: 25vh;
    height: 10vh;
    background-color: crimson;
    border-radius: 5px;
    font-weight: bold;
    font-size: 3vh;
  }

  button:hover {
    box-shadow: 5px, 10px, black;
  }
`;

export default StyledPartidaFinalizada;