import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  rosaEscuro: '#E66767',
  rosaClaro: '#FFEBD9',
  rosaMaisClaro: '#FFF8F2',
  branca: '#FFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`

export const Titulo = styled.h3`
  color: ${cores.rosaEscuro};
  padding-top: 8px;
  padding-left: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  background-color: transparent;

  img {
    padding-left: 8px;
    height: 21px;
    vertical-align: middle;
    margin-bottom: 5px;
    background-color: transparent;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
    background-color: ${cores.rosaMaisClaro};
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

`

export default GlobalStyle
