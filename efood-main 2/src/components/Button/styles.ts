import styled, { css } from 'styled-components'
import theme from '../../global/theme'
import { Link } from 'react-router-dom'

type ButtonProps = {
  $displayMode?: 'fullWidth' | 'inlineBlock'
  $themeMode?: 'primary' | 'second'
}

const baseStyleButton = css<ButtonProps>`
  width: ${(props) => (props.$displayMode === 'fullWidth' ? '100%' : 'auto')};
  display: ${(props) =>
    props.$displayMode === 'fullWidth' ? 'block' : 'inline-block'};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${(props) =>
    props.$themeMode === 'primary' ? theme.Colors.text : theme.Colors.primary};
  color: ${(props) =>
    props.$themeMode === 'primary'
      ? theme.Colors.background
      : theme.Colors.text};
  border: none;
`

export const ButtonContainer = styled.button<ButtonProps>`
  ${baseStyleButton}
  cursor: pointer;
`

export const ButtonContainerLink = styled(Link)<ButtonProps>`
  ${baseStyleButton}
  text-decoration: none;
`

// Novo estilo para os campos de input com erro
export const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`

// Estilo para inputs com erro
export const InputWithError = styled.input`
  border: 1px solid red;
  background-color: #ffe6e6;
`

// Exemplo de aplicação de InputWithError para inputs
export const InputGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${theme.Colors.border};
    border-radius: 4px;

    &:focus {
      border-color: ${theme.Colors.primary};
      outline: none;
    }

    &.error {
      border-color: red;
      background-color: #ffe6e6;
    }
  }
`
