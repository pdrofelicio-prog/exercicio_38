import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const CardRestaurante = styled.div`
  display: block;
  height: 408px;
  background-color: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    height: 460px;
  }
`

export const ImagemDiv = styled.div`
  width: 100%;
  height: 217px;
  text-align: center;
  position: relative;
  background-color: #fff;
  background-size: cover;
  background-position: center;
`

export const CardAtributosDiv = styled.div`
  height: 188px;
  border-right: solid 1px ${cores.rosaEscuro};
  border-left: solid 1px ${cores.rosaEscuro};
  border-bottom: solid 1px ${cores.rosaEscuro};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    height: 240px;
  }
`

export const TituloNotaDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  background-color: #fff;
`

export const DescricaoCard = styled.p`
  color: ${cores.rosaEscuro};
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  background-color: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }
`
