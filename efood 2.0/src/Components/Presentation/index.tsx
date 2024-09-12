import { ItalianBanner } from "./styles";

type Props = {
  categoria: string;
  nome: string;
  imagem: string;
};

const Presentation = ({ categoria, nome, imagem }: Props) => (
  <ItalianBanner imagem={imagem}>
    <div className="container">
      <span>{categoria}</span>
      <h1>{nome}</h1>
    </div>
  </ItalianBanner>
);

export default Presentation;
