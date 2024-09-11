import { Restaurante } from '../../models/Restaurante'
import * as S from './styles'
import { Container } from '../../styles'

type TipoBanner = {
  restaurante: Restaurante
}

export const Banner = ({ restaurante }: TipoBanner) => {
  return (
    <S.DivBanner style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <Container>
        <S.TextoBanner>{restaurante?.tipo}</S.TextoBanner>
        <S.TituloBanner>{restaurante?.titulo}</S.TituloBanner>
        <S.DivEfeito />
      </Container>
    </S.DivBanner>
  )
}
