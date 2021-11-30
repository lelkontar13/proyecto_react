import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function Item(props) {
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
    agregarProducto({ item: props.detalle, cantidad: cant });
  }
  console.log(cartList);

  return (
    <div key={props.id} className="card w-50 mt-5">
      <div className="card-header">
        {props.nombre} - {props.categoria}
      </div>
      <div className="card-body">
        <img src={props.foto} alt="foto" />
        {props.precio}
        <div>
          <button onClick={handlerAdd}>Agregar</button>
          {count}
          <button onClick={handlerSubtract}>Quitar</button>
          <br />
          <button onClick={() => onAdd(3)}>Agregar Carrito</button>
        </div>
        <Link to={`/menu/detalle/${props.id}`}>
          <p>Detalle</p>
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Item;
