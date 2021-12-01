import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div key={props.id} className="card w-50 mt-5">
      <div className="card-header">
        {props.nombre} - {props.categoria}
      </div>
      <div className="card-body">
        <img src={props.foto} alt="foto" />
        {props.precio}
        <ItemCount
          stock={props.stock}
          detalle={props.detalle}
          nombre={props.nombre}
        />
        <Link to={`/menu/detalle/${props.id}`}>
          <p>Detalle</p>
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Item;
