import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { RootReducer } from '../../store'
import { close, changePage } from '../../store/reducers/cart'
import * as S from './styles'
import CartItems from '../../components/CartItems'
import CartDados from '../../components/CartDados'

const Cart = () => {
  const { isOpen, cartPage } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(changePage('cart'))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <S.DivPrincipal key={1} className={isOpen ? 'is-open' : ''}>
          <S.DivOverlay
            key={2}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={isOpen ? 'is-open' : ''}
            onClick={closeCart}
          />
          <S.Aside
            key={3}
            as={motion.div}
            initial={{ right: '-500px' }}
            animate={{ right: 0 }}
            exit={{ right: '-500px' }}
            transition={{ duration: 1 }}
            className={isOpen ? 'is-open' : ''}
          >
            {cartPage === 'cart' && <CartItems />}
            {cartPage === 'entrega' && <CartDados tipo="entrega" />}
            {cartPage === 'pagamento' && <CartDados tipo="pagamento" />}
            {cartPage === 'realizado' && <CartDados tipo="realizado" />}
          </S.Aside>
        </S.DivPrincipal>
      )}
    </AnimatePresence>
  )
}

export default Cart
