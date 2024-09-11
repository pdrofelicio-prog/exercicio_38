import * as S from './styles'
import { Logo } from '../../components/Logo'
import logoInstagramImg from '../../assets/images/redes_sociais/instagram-logo-svg.svg'
import logoFacebookImg from '../../assets/images/redes_sociais/facebook-logo-svg.svg'
import logoTwitterImg from '../../assets/images/redes_sociais/twitter-logo-svg.svg'
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {
  return (
    <S.FooterStyle>
      <Logo />
      <S.ListaRedesSociais>
        <li>
          <S.LinkRedeSocial>
            <a href="https://www.instagram.com/pazzinidiego/" target="blank">
              <img src={logoInstagramImg} alt="logo instagram" />
            </a>
          </S.LinkRedeSocial>
        </li>
        <li>
          <S.LinkRedeSocial>
            <a href="https://web.facebook.com/diego.pazzini.1" target="blank">
              <img src={logoFacebookImg} alt="logo facebook" />
            </a>
          </S.LinkRedeSocial>
        </li>
        <li>
          <S.LinkRedeSocial>
            <a href="https://api.whatsapp.com/send?phone=5551995135379&">
              <IoLogoWhatsapp
                size={28}
                color="ec5357"
                style={{
                  marginTop: '-2px'
                }}
              />
            </a>
          </S.LinkRedeSocial>
        </li>
      </S.ListaRedesSociais>
      <S.TextoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.TextoFooter>
    </S.FooterStyle>
  )
}

export default Footer
