const ItemDetail = ({ detalle }) => {
  return (
    <div key={detalle.id} className="card w-50 mt-5">
      <div className="card-header">
        {detalle.nombre} - {detalle.categoria}
      </div>
      <div className="card-body">
        <img src={detalle.foto} alt="foto" />
        {detalle.detalle}
      </div>
    </div>
  );
};

export default ItemDetail;
