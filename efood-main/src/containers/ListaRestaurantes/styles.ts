import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListaRestaurantesStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
