import React from "react";

const ItemDetailContainer = (props) => {
  return (
    <div class="cuerpo">
      <div class="tituloHistoria">
        <h2>{props.nombre}</h2>
      </div>
      <img src={props.foto} alt="foto" />
      <div class="textoHistoria">
        <p>{props.detalle}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
