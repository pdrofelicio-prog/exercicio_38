import styled from "styled-components";
import Lixeira from "../../assets/images/lixeira-icone.svg";
import { breakpoints, cores } from "../../Global";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;

  &.cart-is-open {
    display: flex;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;

  color: ${cores.vermelho};
  background-color: ${cores.bege};

  width: 344px;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }

  img {
    width: 80px;
    height: 80px;

    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 18px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 70px;

    width: 16px;
    height: 16px;

    cursor: pointer;
    border: none;
    background-image: url(${Lixeira});
    background-color: transparent;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  width: 100%;
  height: 100%;

  background-color: #000;
`;

export const Aside = styled.aside`
  max-width: 360px;
  padding: 32px 8px;

  width: 100%;
  z-index: 1;

  background-color: ${cores.vermelho};
  
  .message-cart-div{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .message-cart {
    font-size: 16px;
    color: ${cores.bege};
    margin-bottom: 16px;
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
`;

export const Preco = styled.h3`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;

  color: ${cores.bege};
`;

export const Button = styled.button`
  width: 100%;

  height: 24px;
  font-size: 14px;
  font-weight: 700;

  background-color: ${cores.bege};
  color: ${cores.vermelho};

  border: none;
  cursor: pointer;
`;
