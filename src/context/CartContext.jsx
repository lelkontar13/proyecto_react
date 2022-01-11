import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const agregarProducto = (item) => {
    setCartList([...cartList, item]);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const eliminarProducto = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const precioTotal = (item) => {
    return cartList.reduce(
      (acum, item) => acum + item.cantidad * item.precio,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarProducto,
        vaciarCarrito,
        eliminarProducto,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
