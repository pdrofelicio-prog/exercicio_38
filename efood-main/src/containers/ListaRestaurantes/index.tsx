import * as S from './styles'
import { CardRestaurante } from '../../components/CardRestaurante'
import { Restaurante } from '../../models/Restaurante'

export type PropsRestaurantList = {
  restaurantes: Restaurante[]
  id?: string
}

const ListaRestaurantes = ({ restaurantes }: PropsRestaurantList) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <S.ListaRestaurantesStyles>
      {restaurantes.map((restaurante) => (
        <CardRestaurante
          key={restaurante.id}
          id={restaurante.id}
          tipo={restaurante.tipo}
          capa={restaurante.capa}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          destacado={restaurante.destacado}
          descricao={getDescricao(restaurante.descricao)}
        />
      ))}
    </S.ListaRestaurantesStyles>
  )
}

export default ListaRestaurantes
