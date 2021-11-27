import { useState } from "react";

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
      <div className="card-header">{props.name}</div>
      <div className="card-body">
        <img src={props.foto} alt="foto" />
        {props.precio}
        <div>
          <button onClick={handlerAdd}>Agregar</button>
          {count}
          <button onClick={handlerSubtract}>Quitar</button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Item;
