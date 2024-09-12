import { useParams } from "react-router-dom";

import Header from "../../Components/Header";
import ClockSpinner from "../../Components/ClockSpinner";
import Presentation from "../../Components/Presentation";
import PlatesList from "../../Components/PlatesList";

import { useGetRestaurantByIdQuery } from "../../services/api";

const RestaurantPage = () => {
  const { id } = useParams();
  const { data: restaurant } = useGetRestaurantByIdQuery(id!);

  if (!restaurant) {
    return (
      <>
        <Header />
        <ClockSpinner />
      </>
    );
  }

  return (
    <>
      <Header />
      <Presentation
        categoria={restaurant.tipo}
        imagem={restaurant.capa}
        nome={restaurant.titulo}
        key={restaurant.id}
      />
      <PlatesList plates={restaurant.cardapio} />
    </>
  );
};

export default RestaurantPage;
