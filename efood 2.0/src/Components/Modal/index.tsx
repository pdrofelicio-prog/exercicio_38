import { useDispatch } from "react-redux";
import { Dispatch } from "react";

import { add, openCart } from "../../store/reducers/cart";

import { Button } from "../Plate/styles";
import { modalType } from "../PlatesList";

import botaoFechar from "../../assets/images/botao_fechar.png";
import { formataPreco } from "../../utils";

import * as S from "./styles";

type plateProps = {
  descricao: string;
  foto: string;
  id: number;
  nome: string;
  porcao: string;
  preco: number;
};

interface Props extends modalType {
  setModal: Dispatch<modalType>;
  plate: plateProps;
}

const Modal = ({
  id,
  descricao,
  foto,
  nome,
  porcao,
  preco,
  visivel,
  setModal,
  plate,
}: Props) => {
  const dispatch = useDispatch();

  const abreCarrinho = () => {
    dispatch(add(plate));
    setModal({
      id: 0,
      descricao: "",
      foto: "",
      nome: "",
      porcao: "",
      preco: 0,
      visivel: false,
    });
    dispatch(openCart());
  };

  return (
    <S.Modal className={visivel ? "visible" : ""} key={id}>
      <S.ModalContent>
        <button>
          <img
            onClick={() => {
              setModal({
                id: 0,
                descricao: "",
                foto: "",
                nome: "",
                porcao: "",
                preco: 0,
                visivel: false,
              });
            }}
            src={botaoFechar}
            alt="botão fechar"
          />
        </button>
        <img src={foto} alt="Nome do prato" />

        <div>
          <h3>{nome}</h3>
          <p>
            {descricao} <br /> <br />
            Serve de: {porcao}
          </p>
          <Button onClick={abreCarrinho}>
            Adicionar ao carrinho - {formataPreco(preco)}
          </Button>
        </div>
      </S.ModalContent>
      <div
        onClick={() => {
          setModal({
            id: 0,
            descricao: "",
            foto: "",
            nome: "",
            porcao: "",
            preco: 0,
            visivel: false,
          });
        }}
        className="overlay"
      ></div>
    </S.Modal>
  );
};

export default Modal;
