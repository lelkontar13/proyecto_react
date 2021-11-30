import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../components/Entrega/ItemDetail";
import { getFetch } from "../helpers/getFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState(true);
  const { idPlato } = useParams();

  useEffect(() => {
    if (idPlato) {
      getFetch
        .then((data) => {
          console.log("Llamada");
          setDetalle(data.find((prod) => prod.id === idPlato));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((data) => {
          console.log("Llamada");
          setDetalle(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    return () => {
      console.log("clean");
    };
  }, [idPlato]);

  return (
    <div className="body">
      {loading ? (
        <h1>Actualizando detalle...</h1>
      ) : (
        <ItemDetail detalle={detalle} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
