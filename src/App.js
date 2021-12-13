import "./components/Entrega/NavBar.css";
import NavBar from "./components/Entrega/NavBar";
import Cart from "./components/Entrega/Cart";
import Inicio from "./components/Entrega/Inicio";
import Beirut from "./components/Entrega/Beirut";
import Encontranos from "./components/Entrega/Encontranos";
import ItemsListContainer from "./container/ItemsListContainer";
import ItemDetailCointainer from "./container/ItemDetailContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <div className="App-background">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/beirut" element={<Beirut />} />
            <Route exact path="/encontranos" element={<Encontranos />} />
            <Route
              exact
              path="/menu/categoria/:idCategoria"
              element={<ItemsListContainer />}
            />
            <Route
              exact
              path="/menu/detalle/:idPlato"
              element={<ItemDetailCointainer />}
            />
            <Route exact path="/menu" element={<ItemsListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
