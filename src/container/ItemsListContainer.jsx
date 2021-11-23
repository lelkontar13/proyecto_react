import React from "react";
import { useState, useEffect } from "react";
import Itemlist from "../components/Entrega/Itemlist";
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
        <Itemlist products={products} />
      )}
    </div>
  );
}

export default ItemsListContainer;
