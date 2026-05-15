import styled from "styled-components";

interface CardStyleProps {
  priority: "HIGH" | "LOW" | "MID";
}

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  padding: 10px;
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5vh;
`;

export const Body = styled.div`
  display: flex;
  // justify-content: space-between;
  padding: 10px;
  height: 80%;
  gap: 20px;
  padding-top: 5vh;
  padding-left: 2vw;
  padding-right: 2vw;
`;

export const Content = styled.div`
  font-size: 100px;
  font-weight: 900;
`;

export const Content2 = styled.div`
  font-size: 50px;
  font-weight: 400;
`;

export const Containers = styled.div`
  display: flex;
  width: 20vw;
  height: 64vh;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.3);
  overflow: scroll;
`;

export const Card = styled.div`
  display: flex;
  width: 90%;
  height: 20%;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #e6e7e1;
  padding-bottom: 1vh;
  padding-top: 2vh;
  transition: scale 0.2s ease-in-out;
  // min-height: 20%;
  &:hover {
    scale: 1.05;
  }
`;

export const Badge = styled.div<CardStyleProps>`
  background-color: red;
  color: white;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 2px 7px;

  border-radius: 5px; /* Pill shape */
  font-size: 11px;
  font-weight: 100;
  font-family: "Inter", sans-serif;

  background-color: ${({ priority }) =>
    {
      if(priority == "HIGH") return "red";
      else if(priority == "LOW") return "#f7ca18";
      else if(priority == "MID") return "#ca6924"
    }};
`;


export const Containers2 = styled.div`
  display: flex;
  width: 30vw;
  height: 64vh;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
  gap: 15px;
  // background: rgba(255, 255, 255, 0.3);
`;