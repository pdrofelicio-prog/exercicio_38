import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const TagStyleButton = styled(Link)`
  text-decoration: none;
  padding-top: 4px;
  text-align: center;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  font-size: 14px;
  border: none;
  margin-left: 8px;
  width: 82px;
  height: 30px;
  margin-bottom: 8px;
`

export const TagStyleImagem = styled.button`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 60px;
  height: 30px;
  padding: 0;
  margin: 0;
  font-size: 12px;
`

export const TagStyleDestaque = styled(TagStyleImagem)`
  top: 16px;
  right: 85px;
  width: 120px;
`
