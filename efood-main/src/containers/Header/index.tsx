import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import * as S from './styles'
import { Logo } from '../../components/Logo'
import backgroundHeader from '../../assets/images/background-header.png'
import { Container } from '../../styles'

const Header = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Header style={{ backgroundImage: `url(${backgroundHeader})` }}>
      <Container>
        <S.DivHeader>
          <S.TextoRestaurantes to={'/'} as={Link}>
            Restaurantes
          </S.TextoRestaurantes>
          <Logo />
          {itens.length == 0 ? (
            <S.TextoQuantidade onClick={openCart}>
              Não há produtos no carrinho
            </S.TextoQuantidade>
          ) : (
            <S.TextoQuantidade onClick={openCart}>
              {itens.length} produto{itens.length > 1 && 's'} no carrinho
            </S.TextoQuantidade>
          )}
        </S.DivHeader>
      </Container>
    </S.Header>
  )
}

export default Header
