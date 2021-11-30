import Item from "./Item";

function Itemlist(props) {
  return (
    <div>
      {props.products.map((prod) => (
        <Item
          id={prod.id}
          nombre={prod.nombre}
          precio={prod.precio}
          foto={prod.foto}
          stock={prod.stock}
          categoria={prod.categoria}
          detalle={prod.detalle}
        />
      ))}
      ;
    </div>
  );
}

export default Itemlist;
