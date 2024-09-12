import styled from "styled-components";
import { breakpoints, cores } from "../../Global";

type Props = {
  imagem: string;
};

export const ItalianBanner = styled.div<Props>`
  position: relative;
  height: 280px;
  font-size: 32px;
  margin-bottom: 80px;
  font-weight: 900;

  background-image: url(${(props) => props.imagem});
  background-size: cover;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;

    height: 100%;

    color: ${cores.branco};
  }

  span {
    font-weight: 100;
    margin-top: 24px;
    font-size: 32px;
  }

  h1 {
    margin-bottom: 32px;
    font-size: 32px;
  }
`;
