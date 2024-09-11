import * as S from './styles'
import { Logo } from '../../components/Logo'
import backgroundHeader from '../../assets/images/background-header.png'

const Hero = () => {
  return (
    <S.Hero style={{ backgroundImage: `url(${backgroundHeader})` }}>
      <Logo />
      <S.TituloHero>
        Viva experiências gastronômicas no conforto da sua casa
      </S.TituloHero>
    </S.Hero>
  )
}

export default Hero
