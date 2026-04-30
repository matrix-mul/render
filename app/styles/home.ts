import styled from "styled-components";

export const Main = styled.h1`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 5vh;
`
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    padding: 10px;
`
export const Body = styled.div`
    display: flex;
    padding: 10px;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`

export const Content = styled.div`
    font-size: 100px;
    font-weight: 900;
`

export const Content2 = styled.div`
    font-size: 50px;
    font-weight: 400;
`
export const Footer = styled.div`
    display: flex;
    height: 7%;
    padding: 2vh 0 2vh 0;
    justify-content: center;
    align-items: center;
`