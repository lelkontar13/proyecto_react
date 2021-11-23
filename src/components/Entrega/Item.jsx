function Item(props) {
  return (
    <div key={props.id} className="card w-50 mt-5">
      <div className="card-header">{props.name}</div>
      <div className="card-body">
        <img src={props.foto} alt="foto" />
        {props.precio}
      </div>
    </div>
  );
}

export default Item;
