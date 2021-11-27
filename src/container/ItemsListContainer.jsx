import React from "react";
import { useState, useEffect } from "react";
import Itemlist from "../components/Entrega/Itemlist";
import { getFetch } from "../helpers/getFetch";
import { useParams } from "react-router-dom";

function ItemsListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      getFetch
        .then((data) => {
          console.log("Llamada");
          setProducts(data.filter((prod) => prod.categoria === idCategoria));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((data) => {
          console.log("Llamada");
          setProducts(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    return () => {
      console.log("clean");
    };
  }, [idCategoria]);

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
