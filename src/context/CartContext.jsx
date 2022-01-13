import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const agregarProducto = (item) => {
    const index = cartList.findIndex((i) => i.id === item.id);

    if (index > -1) {
      const agregado = cartList[index].cantidad;

      cartList.splice(index, 1);
      setCartList([
        ...cartList,
        { ...item, cantidad: item.cantidad + agregado },
      ]);
    } else {
      setCartList([...cartList, { ...item, cantidad: item.cantidad }]);
    }
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
