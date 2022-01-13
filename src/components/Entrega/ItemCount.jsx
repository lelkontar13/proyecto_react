import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = (props) => {
  const [count, setCount] = useState(1);

  const handlerAdd = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const handlerSubtract = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };

  const { agregarProducto } = useCartContext();

  const [addToCartButton, setAddToCartButton] = useState(true);

  const onAdd = () => {
    agregarProducto({
      id: props.id,
      item: props.nombre,
      cantidad: count,
      precio: props.precio,
    });
    setAddToCartButton(false);
  };

  return (
    <div>
      {addToCartButton ? (
        <div>
          <button onClick={handlerAdd}>Agregar</button>
          {count}
          <button onClick={handlerSubtract}>Quitar</button>
          <br />
          <button onClick={onAdd}>Agregar Carrito</button>
        </div>
      ) : (
        <div>
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
