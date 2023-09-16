import styled from "styled-components";
 
const StyledOpciones = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vh;
    padding-top: 5vh;
    border-top: 2px solid grey;

    img {
        height: 10vh;
    }

    img:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;

export default StyledOpciones;