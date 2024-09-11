import { useParams } from 'react-router-dom'
import Header from '../../containers/Header'
import { Banner } from '../../containers/Banner'
import ListaProdutos from '../../containers/ListaProdutos'
import { Container } from '../../styles'
import { useGetPageRestauranteQuery } from '../../services/api'
import { Produto } from '../../models/Produto'
import Cart from '../../containers/Cart'

const Perfil = () => {
  const { id } = useParams()
  const { data: restauranteAtual } = useGetPageRestauranteQuery(id ? id : '0')

  if (!restauranteAtual || !restauranteAtual.cardapio) {
    return <h3>Carregando...</h3>
  }

  const listaProdutosRestaurante: Produto[] = restauranteAtual.cardapio

  return (
    <>
      <Header />
      <Cart />
      <Banner restaurante={restauranteAtual} />
      <Container>
        {listaProdutosRestaurante && (
          <ListaProdutos listaProdutos={listaProdutosRestaurante} />
        )}
      </Container>
    </>
  )
}

export default Perfil
