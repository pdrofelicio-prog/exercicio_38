import styled from "styled-components";
import { breakpoints, cores } from "../../Global";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  color: ${cores.branco};

  width: 1024px;
  height: 344px;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    width: 768px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 324px;
    height: 560px;
    flex-direction: column;
  }

  button {
    border: none;
    img {
      position: absolute;
      top: 8px;
      right: -8px;
      width: 16px;
      height: 16px;
      cursor: pointer;

      @media (max-width: ${breakpoints.desktop}) {
        top: 24px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        top: -24px;
      }
    }
  }

  img {
    width: 280px;
    height: 280px;
    margin: 0 32px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 40px;
    }
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
      margin-top: 32px;
      margin-bottom: 16px;

      @media (max-width: ${breakpoints.tablet}) {
        margin-left: 8px;
        align-self: center;
      }
    }

    p {
      width: 656px;
      font-size: 14px;

      @media (max-width: ${breakpoints.desktop}) {
        width: 372px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
        margin-left: 8px;
        align-self: center;
      }
    }

    button {
      width: 218px;
      margin-top: 20px;

      @media (max-width: ${breakpoints.tablet}) {
        width: 80%;
        align-self: center;
      }
    }
  }

  background-color: ${cores.vermelho};
`;
