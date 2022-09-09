import React from 'react';
import BotonEnviarPedido from '../BotonEnviarPedido/BotonEnviarPedido';

const CarritoPedidos = () => {
  return (
      <div className="d-wrap w-25">
        <ul class="list-group list-group-flush d-flex">
         <li class="list-group-item">Producto</li>
         <li class="list-group-item">Producto</li>
         <li class="list-group-item">Producto</li>
         <li class="list-group-item">Producto</li>
         <li class="list-group-item">Producto</li>
        </ul>
        <BotonEnviarPedido />
      </div>
  );
};

export default CarritoPedidos;