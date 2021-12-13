import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../components/Entrega/ItemDetail";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState(true);
  const { idPlato } = useParams();

  async function getDocument() {
    const docRef = doc(db, "productos", idPlato);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDetalle({ id: docSnap.id, ...docSnap.data() });
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getDocument();
  }, []);

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
