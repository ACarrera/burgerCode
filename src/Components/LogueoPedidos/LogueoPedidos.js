import React from 'react';

const LogueoPedidos = () => {
  return (
    <div className="col d-flex align-items-center pb-3">
      <div className="card border-0">
       <div className="card-body bg-light fs-5">
        Nombre de usuario
       </div>
    </div>
       <button type="button" className="btn btn-danger border-0 rounded-0 px-2 h-25 m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Salir</button>


       <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content border-0 rounded-0">
      <div className="modal-body fs-5">
        ¿Estás seguro de querer cerrar sesión?
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

export default LogueoPedidos;