import styled from 'styled-components'
import { LogoStyle } from '../../components/Logo/styles'
import { Titulo } from '../../styles'
import { breakpoints } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 163px;
  text-align: center;
  padding-top: 40px;
  background-color: transparent;

  ${LogoStyle} {
    margin-left: 44px;
    background-color: transparent;

    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 280px;
  }
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px;
  }
`

export const TextoRestaurantes = styled(Titulo)`
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`

export const TextoQuantidade = styled(Titulo)`
  width: 204px;
  white-space: normal;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`
