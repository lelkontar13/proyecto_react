import { useState } from "react";
import { Link } from "react-router-dom";

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
