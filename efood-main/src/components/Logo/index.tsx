import { LogoButton, LogoDiv, LogoStyle } from './styles'
import LogoImg from '../../assets/images/efood-logo-svg.svg'

export const Logo = () => (
  <LogoDiv>
    <LogoButton to={'/'}>
      <LogoStyle src={LogoImg} alt="Logo Efood" />
    </LogoButton>
  </LogoDiv>
)
