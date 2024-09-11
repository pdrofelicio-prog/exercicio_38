import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListaProdutosStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`
