import React from 'react';

const BotonenviarPedido = () => {
  return (
    <div className="d-flex justify-content-center">

<button type="button" className="btn btn-dark m-2 border-0 rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Enviar pedido
</button>


<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content border-0 rounded-0">
      <div className="modal-body fs-5">
        ¿Estás seguro de realizar tu pedido?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger rounded-0 border-0"><strong>Sí</strong></button>
        <button type="button" className="btn btn-warning rounded-0 border-0" data-bs-dismiss="modal"><strong>Volver</strong></button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default BotonenviarPedido;