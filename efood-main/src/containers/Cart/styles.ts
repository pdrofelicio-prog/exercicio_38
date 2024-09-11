import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const DivPrincipal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  background-color: transparent;

  &.is-open {
    display: flex;
  }
`

export const DivOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.7;
  z-index: 1;
`

export const Aside = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 2;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: -500px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`
