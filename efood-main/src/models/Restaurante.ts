import { Produto } from './Produto'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  descricao: string
  avaliacao: number
  capa: string
  cardapio?: Produto[]
}
