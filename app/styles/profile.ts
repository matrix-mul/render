import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10%;
    padding: 10px;
`

export const Main = styled.div`
    width: 100vw;
    height: 100vh;  
    display: flex;
    flex-direction: column;
    padding: 5vh;
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    height: 80%;
    gap: 20px;
    padding-top: 5vh;
    // padding-bottom: 5vh;
    // place-items: center;
`