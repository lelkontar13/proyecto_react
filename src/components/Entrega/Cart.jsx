import React from "react";
import { useCartContext } from "../../context/CartContext";
import { useState, useEffect } from "react";

function Cart() {
  const { cartList, vaciarCarrito } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartList.map((prod) => {
      temp = temp + prod.precio * prod.cantidad;
    });
    setTotal(temp);
  }, []);

  console.log(cartList);

  return (
    <div>
      {cartList.map((prod) => (
        <li key={prod.id}>
          {prod.cantidad} de {prod.item} $
        </li>
      ))}
      <h1>Total a pagar: {total}</h1>
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
