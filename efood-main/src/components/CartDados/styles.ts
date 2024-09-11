import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask'
import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const DivDados = styled.div`
  display: block;
  visibility: hidden;
  height: 0;
  background-color: transparent;

  &.visible {
    visibility: visible;
    height: auto;
    background-color: ${cores.rosaEscuro};
  }
`

export const DivDadosEnd = styled.div`
  display: block;
  visibility: visible;
  height: auto;
  background-color: ${cores.rosaEscuro};
`

export const TituloDados = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.rosaClaro};
  background-color: transparent;
`

export const FormularioDados = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: ${cores.rosaEscuro};

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10px;
  }
`

export const SuperForm = styled.form`
  background-color: ${cores.rosaEscuro};
`

export const DivMesmaLinha = styled.div`
  background-color: transparent;
  display: flex;
  gap: 34px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 0px;
  }
`

export const DivMesmaLinhaSpecial = styled.div`
  background-color: transparent;
  display: flex;
  gap: 34px;
`

export const DivMesmaLinhaCVV = styled(DivMesmaLinha)`
  justify-content: space-between;
  gap: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 0px;
  }
`

export const FormularioItem = styled.div`
  background-color: transparent;
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;

  label {
    background-color: transparent;
    color: ${cores.rosaClaro};
    display: block;
    margin-bottom: 8px;
  }
`

export const InputFormularioTexto = styled.input`
  padding: 8px;
  width: 100%;
  height: 32px;
  border: none;
  margin: 0;

  &.error {
    border: 2px solid red;
  }
`

export const InputFormularioMask = styled(InputMask)`
  padding: 8px;
  width: 100%;
  height: 32px;
  border: none;
  margin: 0;

  &.error {
    border: 2px solid red;
  }
`

export const InputFormularioMaskCartao = styled(InputFormularioMask)`
  width: 228px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const InputFormularioMaskCvv = styled(InputFormularioMask)`
  @media (max-width: ${breakpoints.tablet}) {
    width: 120px;
  }
`

export const InputFormularioMaskData = styled(InputFormularioMask)`
  width: 155px;
`

export const InputFormularioData = styled(InputFormularioTexto)`
  width: 155px;

  &.error {
    border: 2px solid red;
  }
`

export const TextoFormulario = styled(TituloDados)`
  font-size: 14px;
  line-height: 22px;
  font-weight: normal;
  margin-top: 16px;
  margin-bottom: 24px;
`

export const ErroMensagem = styled.p`
  color: #301934;
  padding-top: 5px;
  font-size: 12px;
  background-color: ${cores.rosaEscuro};
`

export const ErroMensagemGeral = styled(ErroMensagem)`
  display: block;
  background-color: ${cores.rosaEscuro};
  text-align: center;
  margin-bottom: 15px;
  font-weight: bold;
  padding-top: 0;

  &.is-loading {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`

export const DivBotoes = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: transparent;
  margin-bottom: 16px;
  gap: 8px;
`

export const ButtonContainer = styled.button`
  height: 24px;
  border: none;
  color: ${cores.rosaEscuro};
  background-color: ${cores.rosaClaro};
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  max-width: 100%;
  width: 100%;
`

export const ButtonContainerEnd = styled(Link)`
  height: 24px;
  border: none;
  color: ${cores.rosaEscuro};
  background-color: ${cores.rosaClaro};
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  max-width: 100%;
  width: 100%;
`
