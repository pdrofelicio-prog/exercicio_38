import * as S from './styles'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
    <S.Banner>
        <img src={logo} alt="Efood Logo"/>
        <S.H1>Viva experiências gastronômicas no conforto da sua casa</S.H1>
    </S.Banner>
)

export default Banner