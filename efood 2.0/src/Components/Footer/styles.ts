import styled from "styled-components";
import { breakpoints, cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 298px;

  background-color: ${cores.bege};

  margin-top: 120px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  ul {
    display: flex;
    gap: 8px;
  }
`;

export const Copy = styled.p`
  text-align: center;

  font-size: 10px;
  font-weight: 400;
  width: 480px;

  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.desktop}) {
   width: 320px
  }
`;
