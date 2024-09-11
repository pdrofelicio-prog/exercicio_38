import * as S from './styles'
import estrelaImg from '../../assets/images/estrela.png'
import { Titulo } from '../../styles'
import Tag from '../Tag'
import { Restaurante } from '../../models/Restaurante'

export const CardRestaurante = ({
  id,
  titulo,
  destacado,
  tipo,
  descricao,
  avaliacao,
  capa
}: Restaurante) => {
  return (
    <S.CardRestaurante>
      <S.ImagemDiv style={{ backgroundImage: `url(${capa})` }}>
        {destacado === true && <Tag>Destaque da Semana</Tag>}
        <Tag>{tipo}</Tag>
      </S.ImagemDiv>
      <S.CardAtributosDiv>
        <S.TituloNotaDiv>
          <Titulo>{titulo}</Titulo>
          <Titulo>
            {avaliacao}
            <img src={estrelaImg} />
          </Titulo>
        </S.TituloNotaDiv>
        <S.DescricaoCard>{descricao}</S.DescricaoCard>
        <Tag id={id}>Saiba mais</Tag>
      </S.CardAtributosDiv>
    </S.CardRestaurante>
  )
}
