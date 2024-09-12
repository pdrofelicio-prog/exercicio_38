import Banner from "../../Components/Banner";
import ClockSpinner from "../../Components/ClockSpinner";

import RestaurantList from "../../Components/RestaurantList";
import { useGetRestaurantsQuery } from "../../services/api";

export type restaurantsType = {
  id: number;
  titulo: string;
  destaque: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;

  cardapio: [
    {
      id: number;
      foto: string;
      preco: number;
      nome: string;
      descricao: string;
      porcao: string;
    }
  ];
};

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Banner />
        <RestaurantList restaurants={restaurants} />
      </>
    );
  }

  return (
    <>
      <Banner />
      <ClockSpinner />
    </>
  );
};

export default Home;
