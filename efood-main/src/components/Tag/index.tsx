import * as S from './styles'

type TagType = {
  id?: number
  children?: string
}

const Tag = ({ children, id }: TagType) => {
  if (children === 'Saiba mais') {
    return <S.TagStyleButton to={`/perfil/${id}`}>{children}</S.TagStyleButton>
  } else if (children === 'Destaque da Semana') {
    return <S.TagStyleDestaque>{children}</S.TagStyleDestaque>
  }
  return <S.TagStyleImagem>{children}</S.TagStyleImagem>
}

export default Tag
