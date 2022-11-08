import React from 'react';
import './LogueoPedidos.css';

const LogueoPedidos = () => {

  const signOff = () =>{
    window.location.href = '/';
  }

  return (
    <div className="logueo col d-flex align-items-center justify-content-center pb-3 text-center">
      <div className="logueo-pedidos card border-0 d-flex">
       <div className="nombre-de-usuario card-body bg-light fs-5 pb-2">
        <strong>Nombre de usuario</strong>
       </div>
       <div className="d-flex justify-content-center bg-light">
       <button type="button" className="btn btn-danger border-0 rounded-0 px-2 mx-0 col-4 col-md-5 p-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Salir</button>
       </div>
    </div>
       


       <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content border-0 rounded-0">
      <div className="modal-body fs-5">
        ¿Estás seguro de querer cerrar sesión?
      </div>
      <div className="modal-footer">
        <a href="/">
        <button type="button" className="btn btn-danger rounded-0 border-0" onClick={signOff}><strong>Sí</strong></button>
        </a>
        <button type="button" className="btn btn-warning rounded-0 border-0" data-bs-dismiss="modal"><strong>Volver</strong></button>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default LogueoPedidos;