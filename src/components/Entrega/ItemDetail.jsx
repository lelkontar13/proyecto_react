import React from "react";

function ItemDetail(props) {
  return (
    <div>
      id={props.id}
      nombre={props.nombre}
      foto={props.foto}
      detalle={props.detalle}
    </div>
  );
}

export default ItemDetail;
