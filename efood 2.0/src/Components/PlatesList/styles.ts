import styled from 'styled-components'
import { breakpoints } from '../../Global'

export const PlatesListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
   grid-template-columns: 1fr;
   justify-items: center;
  }
`