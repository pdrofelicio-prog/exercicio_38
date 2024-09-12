import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import RestaurantPage from "./Pages/RestaurantPage";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPage />} />
  </Routes>
);

export default Rotas;
