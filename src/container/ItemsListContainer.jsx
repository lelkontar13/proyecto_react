import React from "react";
import { useState, useEffect } from "react";
import Itemlist from "../components/Entrega/Itemlist";
//import { getFetch } from "../helpers/getFetch";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ItemsListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  async function obtenerProductos() {
    const q = query(collection(db, "productos"));
    console.log(idCategoria);
    if (!idCategoria) {
      const querySnapshot = await getDocs(q);
      console.log({ querySnapshot });
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } else {
      const qFiltrado = query(
        collection(db, "productos"),
        where("categoria", "==", idCategoria)
      );
      const querySnapshot = await getDocs(qFiltrado);
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    obtenerProductos();
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
