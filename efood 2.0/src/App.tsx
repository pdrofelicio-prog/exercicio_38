import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import { store } from "./store";

import Rotas from "./routes";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import { GlobalCSS } from "./Global";
import Payment from "./Components/Payment";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
        <Payment />
        <Analytics />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
