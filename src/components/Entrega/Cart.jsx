import React from "react";
import { useCartContext } from "../../context/CartContext";

function Cart() {
  const { cartList, vaciarCarrito } = useCartContext();
  console.log(cartList);

  return (
    <div>
      {cartList.map((prod) => (
        <li key={prod.id}>
          {prod.cantidad} de {prod.item}
        </li>
      ))}
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
