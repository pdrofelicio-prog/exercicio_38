import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const DivBanner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`

export const TextoBanner = styled.h3`
  background-color: transparent;
  position: absolute;
  font-size: 30px;
  color: #fff;
  text-align: start;
  font-weight: 100;
  padding-top: 25px;
  z-index: 1;
`

export const TituloBanner = styled(TextoBanner)`
  position: absolute;
  font-weight: 900;
  padding-top: 215px;
  background-color: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const DivEfeito = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`
