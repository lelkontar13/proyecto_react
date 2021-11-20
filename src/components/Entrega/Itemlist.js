import products from "../../App";
import loading from "../../App";
import Item from "../Entrega/Item";

function Itemlist() {
  return (
    <div>
      {loading ? (
        <h1>Actualizando productos...</h1>
      ) : (
        products.map((prod) => Item)
      )}
    </div>
  );
}

export default Itemlist;
