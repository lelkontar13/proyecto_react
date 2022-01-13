import React from "react";
import { useCartContext } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Cart() {
  const [idOrder, setIdOrder] = useState("");

  const { cartList, vaciarCarrito, eliminarProducto, precioTotal } =
    useCartContext();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartList.map((prod) => {
      temp = temp + prod.precio * prod.cantidad;
    });
    setTotal(temp);
  }, []);

  const generarOrden = async (e) => {
    e.preventDefault();
    const orden = {};
    orden.date = Timestamp.fromDate(new Date());
    orden.comprador = {
      nombre: "Lucia",
      apellido: "El Kontar",
      telefono: "12345678",
      email: "lucia_elkontar@hotmail.com",
      validar: "lucia_elkontar@hotmail.com",
    };
    orden.total = precioTotal();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.item;
      const precio = cartItem.precio;
      return { id, nombre, precio };
    });
    const addOrder = await addDoc(collection(db, "orders"), orden);
    setIdOrder(addOrder.id);
  };

  return (
    <div>
      {cartList.length ? (
        <div>
          {cartList.map((prod) => (
            <div>
              <section>
                {idOrder !== "" && (
                  <label>El id de su orden es : {idOrder}</label>
                )}
              </section>
              <li key={prod.id}>
                {prod.cantidad} de {prod.item} ${prod.precio} -> total: $
                {prod.cantidad * prod.precio}
              </li>
              <button onClick={() => eliminarProducto(prod.id)}>X</button>
            </div>
          ))}
          <h1>{`Precio total: $ ${precioTotal()}`}</h1>
          <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
          <form onSubmit={generarOrden}>
            <input type="text" name="nombre" placeholder="nombre" />
            <input type="text" name="apellido" placeholder="apellido" />
            <input type="text" name="telefono" placeholder="telefono" />
            <input type="email" name="email" placeholder="email" />
            <input type="email" name="validar" placeholder="validar email" />
            <button>Generar Orden</button>
          </form>
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
