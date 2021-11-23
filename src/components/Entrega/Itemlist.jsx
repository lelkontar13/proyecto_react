import Item from "./Item";

function Itemlist(props) {
  return (
    <div>
      {props.products.map((prod) => (
        <Item
          id={prod.id}
          name={prod.name}
          precio={prod.price}
          foto={prod.foto}
        />
      ))}
      ;
    </div>
  );
}

export default Itemlist;
