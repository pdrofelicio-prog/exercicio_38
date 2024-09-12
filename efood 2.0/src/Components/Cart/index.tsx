import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../../store";
import { closeCart, openAddress, remove } from "../../store/reducers/cart";

import { formataPreco } from "../../utils";

import * as S from "./styles";

const Cart = () => {
  const { cartIsOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((acum, valorAtual) => {
      return (acum += valorAtual.preco!);
    }, 0);
  };

  const fecharCarrinho = () => {
    dispatch(closeCart());
  };

  const removerPrato = (id: number) => {
    dispatch(remove(id));
  };

  const continueToAddress = () => {
    dispatch(openAddress());
    dispatch(closeCart());
  };

  return (
    <S.Container className={cartIsOpen ? "cart-is-open" : ""}>
      <S.Overlay onClick={fecharCarrinho} />
      <S.Aside>
        {items.length === 0 ? (
          <div className="message-cart-div">
            <h3 className="message-cart">
              Parece que você ainda não comprou nada 😞, escolhe algum prato e
              coloque em seu carrinho para seguir com o pagamento!🍝
            </h3>
          </div>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)} </span>
                  </div>
                  <button onClick={() => removerPrato(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Preco>
              Valor Total <span>{formataPreco(getTotalPrice())}</span>
            </S.Preco>
            <S.Button type="button" onClick={continueToAddress}>
              Continuar com a entrega
            </S.Button>
          </>
        )}
      </S.Aside>
    </S.Container>
  );
};

export default Cart;
