import { Produto } from '../../models/Produto'
import * as S from './styles'
import { CardProduto } from '../../components/CardProduto'

type ListaTipo = {
  listaProdutos: Produto[]
}

const ListaProdutos = ({ listaProdutos }: ListaTipo) => {
  if (!listaProdutos) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.ListaProdutosStyle>
      {listaProdutos !== undefined &&
        listaProdutos.map(({ id, nome, descricao, foto, porcao, preco }) => (
          <CardProduto
            key={id}
            id={id}
            foto={foto}
            nome={nome}
            descricao={descricao}
            porcao={porcao}
            preco={preco}
          />
        ))}
    </S.ListaProdutosStyle>
  )
}

export default ListaProdutos
