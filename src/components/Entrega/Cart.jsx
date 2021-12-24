import React from "react";
import { useCartContext } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, vaciarCarrito, eliminarProducto } = useCartContext();

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
      {cartList.length ? (
        <div>
          {cartList.map((prod) => (
            <div>
              <li key={prod.id}>
                {prod.cantidad} de {prod.item} ${prod.precio} -> total: $
                {prod.cantidad * prod.precio}
              </li>
              <button onClick={() => eliminarProducto(prod.id)}>X</button>
            </div>
          ))}
          <h1>
            Total a pagar: $
            {cartList.reduce((acc, val) => acc + val.cantidad * val.precio, 0)}
          </h1>
          <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        </div>
      ) : (
        <div>
          <h1>No hay productos en tu carrito</h1>
          <Link to={`/menu`}>
            <p>Volver al MENÚ</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
