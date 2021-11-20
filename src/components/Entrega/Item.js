import prod from "../../container/ItemsListContainer";

function Item() {
  <div key={prod.id} className="card w-50 mt-5">
    <div className="card-header">{prod.name}</div>
    <div className="card-body">
      <img src={prod.foto} alt="foto" />
      {prod.price}
    </div>
  </div>;
}

export default Item;
