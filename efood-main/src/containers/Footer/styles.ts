import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const FooterStyle = styled.footer`
  width: 100%;
  height: 300px;
  text-align: center;
  background-color: ${cores.rosaClaro};
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 80px;
  }
`

export const ListaRedesSociais = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32.5px;
  background-color: transparent;

  li {
    background-color: transparent;
  }
`

export const LinkRedeSocial = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  border-radius: 50%;
  background-color: transparent;

  img {
    background-color: transparent;
  }
`

export const TextoFooter = styled.p`
  font-size: 10px;
  font-style: normal;
  line-height: 12px;
  margin-top: 80px;
  color: ${cores.rosaEscuro};
  width: 480px;
  background-color: transparent;

  @media (max-width: ${breakpoints.desktop}) {
    width: 300px;
    margin-top: 40px;
  }
`
