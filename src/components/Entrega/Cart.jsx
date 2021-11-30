import React from "react";
import { useCartContext } from "../../context/CartContext";

function Cart() {
  const { cartList, vaciarCarrito } = useCartContext();

  return (
    <div>
      {cartList.map((prod) => (
        <li key={prod.id}>{prod.nombre}</li>
      ))}
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
