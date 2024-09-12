import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import { RootReducer } from "../../store";
import { openCart } from "../../store/reducers/cart";

import * as S from "./styles";

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const abrirCarrinho = () => {
    dispatch(openCart());
  };

  return (
    <S.Container>
      <div className="container">
        <S.TextLink to="/">Restaurantes</S.TextLink>
        <Link to="/">
          <img src={logo} alt="Efood Logo" />
        </Link>
        <p onClick={abrirCarrinho}>{items.length} produto(s) no carrinho</p>
      </div>
    </S.Container>
  );
};

export default Header;
