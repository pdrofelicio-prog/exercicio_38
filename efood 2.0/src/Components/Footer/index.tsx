import logo from "../../assets/images//logo.svg";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";

import * as S from "./styles";
const Footer = () => (
  <S.Container>
    <S.Div>
      <img src={logo} alt="Efood Logo" />

      <ul>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </ul>
    </S.Div>

    <S.Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Copy>
  </S.Container>
);

export default Footer;
