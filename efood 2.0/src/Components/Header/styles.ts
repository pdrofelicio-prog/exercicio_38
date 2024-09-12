import { Link } from "react-router-dom";
import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";
import { breakpoints, cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 166px;
  font-size: 18px;
  font-weight: 900;

  background-image: url(${fundo});
  background-size: cover;
  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.desktop}) {
    padding: 24px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      gap: 16px;
    }
  }

  p {
    cursor: pointer;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`;
