import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Hero = styled.header`
  width: 100%;
  height: 360px;
  text-align: center;
  padding-top: 40px;
`

export const TituloHero = styled.h2`
  text-align: center;
  width: 539px;
  margin: 0 auto;
  margin-top: 138.5px;
  color: ${cores.rosaEscuro};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  background-color: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    margin-top: 68.5px;
    font-size: 28px;
  }
`
