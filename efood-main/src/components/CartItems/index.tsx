import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { RootReducer } from '../../store'
import { remove, changePage, close } from '../../store/reducers/cart'
import { formataPreco } from '../../components/CardProduto'
import { CartState } from '../../store/reducers/cart'
import * as S from './styles'

const CartItems = () => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const mudarPagina = (pagina: CartState['cartPage']) => {
    dispatch(changePage(pagina))
  }

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco ? valorAtual.preco : 0)
    }, 0)
  }

  return (
    <LayoutGroup>
      <S.ListaItems as={AnimatePresence}>
        {itens.map(({ id, nome, preco, foto }) => (
          <S.CartItem
            key={id}
            as={motion.div}
            layout
            transition={{ duration: 0.5 }}
          >
            <img src={foto} />
            <div>
              <h3>{nome}</h3>
              <span>{formataPreco(preco)}</span>
            </div>
            <button type="button" onClick={() => removeItem(id)} />
          </S.CartItem>
        ))}
      </S.ListaItems>
      <S.DivPrices layout transition={{ duration: 0.5 }}>
        <S.Prices>
          {itens.length > 0
            ? 'Valor total'
            : 'Você não possui itens no carrinho'}
        </S.Prices>
        {itens.length > 0 && (
          <S.Prices>{formataPreco(getTotalPrice())}</S.Prices>
        )}
      </S.DivPrices>
      <S.ButtonContainer
        as={motion.div}
        layout
        transition={{ duration: 0.5 }}
        title={
          itens.length > 0
            ? 'Clique aqui para continuar com a entrega'
            : 'Clique aqui para fechar'
        }
        onClick={() => {
          itens.length > 0 ? mudarPagina('entrega') : dispatch(close())
        }}
        type="button"
      >
        {itens.length > 0 ? 'Continuar com a entrega' : 'Fechar'}
      </S.ButtonContainer>
    </LayoutGroup>
  )
}

export default CartItems
