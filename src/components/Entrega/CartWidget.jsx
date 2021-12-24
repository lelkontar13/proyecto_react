import React from "react";
import { useCartContext } from "../../context/CartContext";
import Carrito from "../../img/carrito.png";

function CartWidget() {
  const { cartList } = useCartContext();

  return (
    <div>
      {cartList.length ? (
        <div>
          <img id="carrito" src={Carrito} alt="Carrito" />
          <h4>{cartList.reduce((acc, val) => acc + val.cantidad, 0)}</h4>
        </div>
      ) : null}
    </div>
  );
}

export default CartWidget;
