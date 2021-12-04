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

  const [addToCartButton, setAddToCartButton] = useState(true);

  function onAdd(cant) {
    agregarProducto({ item: props.nombre, cantidad: cant });
    setAddToCartButton(false);
  }

  console.log(cartList);

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
          <button> Finalizar Compra</button>
          <button>Ir al carrito</button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
