import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

import { RootReducer } from "../../store";
import {
  closeAddress,
  openCart,
  addAddressInfos,
  openPaymemt,
} from "../../store/reducers/cart";

import { Aside, Button, Overlay } from "../Cart/styles";
import * as S from "./styles";

const Checkout = () => {
  const { adressOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const backToCart = () => {
    dispatch(openCart());
    dispatch(closeAddress());
  };

  const getTotalPrice = () => {
    return items.reduce((acum, valorAtual) => {
      return (acum += valorAtual.preco!);
    }, 0);
  };

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      houseNumber: "",
      complement: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5).required(),
      address: Yup.string().min(5).required(),
      city: Yup.string().min(3).required(),
      zipCode: Yup.string().min(9).max(9).required(),
      houseNumber: Yup.string().min(1).max(5).required(),
    }),
    onSubmit: (values) => {
      dispatch(
        addAddressInfos({
          products: items.map((item) => ({
            id: item.id,
            price: getTotalPrice(),
          })),

          delivery: {
            receiver: values.fullName,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.houseNumber),
              complement: values.complement,
            },
          },
        })
      );
      dispatch(openPaymemt());
      dispatch(closeAddress());
    },
  });

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched;
    const isInvalid = fieldname in form.errors;
    const hasError = isInvalid && isTouched;

    return hasError;
  };

  const handleGoToPayment = () => {
    form.handleSubmit;
  };

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={adressOpen ? "address-is-open" : ""}>
        <Overlay />
        <Aside>
          <h3>Entrega</h3>
          <S.Row>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError("fullName") ? "has-error" : ""}
            />
          </S.Row>

          <S.Row>
            <label htmlFor="address">Endereço</label>
            <input
              name="address"
              id="address"
              type="text"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError("address") ? "has-error" : ""}
            />
          </S.Row>

          <S.Row>
            <label htmlFor="city">Cidade</label>
            <input
              name="city"
              id="city"
              type="text"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError("city") ? "has-error" : ""}
            />
          </S.Row>
          <S.Row className="mid-size">
            <div>
              <label htmlFor="zipCode">CEP</label>
              <InputMask
                name="zipCode"
                id="zipCode"
                type="text"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("zipCode") ? "has-error" : ""}
                mask="99999-999"
              />
            </div>
            <div>
              <label htmlFor="houseNumber">Número</label>
              <input
                name="houseNumber"
                id="houseNumber"
                type="text"
                value={form.values.houseNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("houseNumber") ? "has-error" : ""}
              />
            </div>
          </S.Row>

          <S.Row>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              name="complement"
              id="complement"
              type="text"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.Row>

          <Button
            onClick={handleGoToPayment}
            disabled={!form.isValid}
            title="Continuar com a compra"
            type="submit"
            className="payment-button"
          >
            Continuar com o pagamento
          </Button>
          <Button
            title="Voltar para o carrinho"
            type="button"
            onClick={backToCart}
          >
            Voltar para o carrinho
          </Button>
        </Aside>
      </S.Container>
    </form>
  );
};

export default Checkout;
