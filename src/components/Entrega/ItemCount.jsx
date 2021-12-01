import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

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

  function onAdd(cant) {
    agregarProducto({ item: props.nombre, cantidad: cant });
  }

  console.log(cartList);
  return (
    <div>
      <button onClick={handlerAdd}>Agregar</button>
      {count}
      <button onClick={handlerSubtract}>Quitar</button>
      <br />
      <button onClick={() => onAdd(count)}>Agregar Carrito</button>
    </div>
  );
};

export default ItemCount;
