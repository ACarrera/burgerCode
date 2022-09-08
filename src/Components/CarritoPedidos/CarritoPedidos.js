import React from 'react';
import BotonEnviarPedido from '../BotonEnviarPedido/BotonEnviarPedido';

const CarritoPedidos = () => {
  return (
      <div className="d-wrap w-25">
        <ul class="list-group list-group-flush">
         <li class="list-group-item">An item</li>
         <li class="list-group-item">A second item</li>
         <li class="list-group-item">A third item</li>
         <li class="list-group-item">A fourth item</li>
         <li class="list-group-item">And a fifth one</li>
        </ul>
        <BotonEnviarPedido />
      </div>
  );
};

export default CarritoPedidos;