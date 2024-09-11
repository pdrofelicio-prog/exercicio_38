import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { add } from '../../store/reducers/cart'
import { useState } from 'react'
import * as S from './styles'
import { Produto } from '../../models/Produto'
import closeImg from '../../assets/images/close-icon.png'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const CardProduto = (produto: Produto) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    setEVisivel(false)
  }

  const [eVisivel, setEVisivel] = useState(false)

  const abreviaDescricao = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 162) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.CardProduto>
        <S.ImagemProduto src={produto.foto} />
        <S.TituloProduto>{produto.nome}</S.TituloProduto>
        <S.DescricaoProduto>
          {abreviaDescricao(produto.descricao)}
        </S.DescricaoProduto>
        <S.BotaoAdicionarCarrinho onClick={() => setEVisivel(true)}>
          Adicionar ao carrinho
        </S.BotaoAdicionarCarrinho>
      </S.CardProduto>
      <AnimatePresence>
        {eVisivel && (
          <S.Modal
            key={5}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <S.ModalContent>
              <S.CardProduto isModal>
                <S.ImagemProduto isModal src={produto.foto} />
                <div>
                  <S.TituloProduto isModal>{produto.nome}</S.TituloProduto>
                  <S.DescricaoProduto isModal>
                    {produto.descricao}
                  </S.DescricaoProduto>
                  <S.DescricaoProduto isModal>
                    Serve:{' '}
                    {produto.porcao === '1 pessoa'
                      ? produto.porcao
                      : 'de ' + produto.porcao}
                  </S.DescricaoProduto>
                  <S.BotaoAdicionarCarrinho isModal onClick={addToCart}>
                    Adicionar ao carrinho - {formataPreco(produto.preco)}
                  </S.BotaoAdicionarCarrinho>
                </div>
                <S.IconClose
                  src={closeImg}
                  alt="fechar modal do produto"
                  onClick={() => setEVisivel(false)}
                />
              </S.CardProduto>
            </S.ModalContent>
            <div className="overlay" onClick={() => setEVisivel(false)}></div>
          </S.Modal>
        )}
      </AnimatePresence>
    </>
  )
}
