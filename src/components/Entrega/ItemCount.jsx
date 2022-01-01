import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = (props) => {
  const agregados = useState(0);
  const [count, setCount] = agregados;

  const handlerAdd = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const handlerSubtract = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const { cartList, agregarProducto } = useCartContext();

  const [addToCartButton, setAddToCartButton] = useState(true);

  function onAdd(cant) {
    const duplicado = cartList.find((item) => item.id === props.id);
    if (duplicado) {
      return alert("Este producto ya esta en el carrito");
    }
    agregarProducto({
      id: props.id,
      item: props.nombre,
      cantidad: cant,
      precio: props.precio,
    });
    setAddToCartButton(false);
  }

  return (
    <div>
      {addToCartButton ? (
        <div>
          <button onClick={handlerAdd}>Agregar</button>
          {count}
          <button onClick={handlerSubtract}>Quitar</button>
          <br />
          <button onClick={() => onAdd(count)}>Agregar Carrito</button>
        </div>
      ) : (
        <div>
          <Link to="/cart">
            <button> Finalizar Compra</button>
          </Link>
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
