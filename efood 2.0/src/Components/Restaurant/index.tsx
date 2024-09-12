import * as S from "./styles";

import Star from "../../assets/images/estrela.png";

type Props = {
  id: number;
  imagem: string;
  nome: string;
  nota: number;
  info: string;
  destaque: boolean;
  categoria: string;
};

const Restaurant = ({
  destaque,
  categoria,
  nome,
  imagem,
  nota,
  info,
  id,
}: Props) => {
  const retornaInfoRestaurante = (info: string) => {
    if (info.length > 183) {
      return info.slice(0, 180) + "...";
    }

    return info;
  };

  return (
    <S.Container>
      <S.Imagem src={imagem} alt={nome} />
      <S.Title>
        <h2>{nome}</h2>
        <span>
          {nota}
          <img src={Star} alt="Nota do restaurante" />
        </span>
      </S.Title>
      <S.Info>{retornaInfoRestaurante(info)}</S.Info>
      <S.Button to={`/restaurant/${id}`}>Saiba mais</S.Button>

      <S.TagContainer destaque={destaque}>
        {destaque ? <S.Tag>Destaque da semana</S.Tag> : ""}
        <S.Tag>{categoria}</S.Tag>
      </S.TagContainer>
    </S.Container>
  );
};

export default Restaurant;
