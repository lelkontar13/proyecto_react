import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "../helpers/getFetch";

function ItemsListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((data) => {
        console.log("Llamada");
        setProducts(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    return () => {
      console.log("clean");
    };
  }, []);

  return (
    <div className="body">
      {loading ? (
        <h1>Actualizando productos...</h1>
      ) : (
        products.map((prod) => (
          <div key={prod.id} className="card w-50 mt-5">
            <div className="card-header">{prod.name}</div>
            <div className="card-body">
              <img src={prod.foto} alt="foto" />
              {prod.price}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ItemsListContainer;
