import React from 'react';
import BotonEnviarPedido from '../BotonEnviarPedido/BotonEnviarPedido';
import LogueoPedidos from '../LogueoPedidos/LogueoPedidos';

const CarritoPedidos = () => {
  return (
      <div className="d-wrap w-25 me-1 pe-3 borde bg-light">
        <LogueoPedidos />
        <ul class="list-group list-group-flush d-flex text-center">
         <table>
          <tr className="border-bottom">
            <td>
              Producto
            </td>
            <td>
              <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-dark border-0 rounded-0 py-1 m-1">X</button>
          </tr>
          <tr className="border-bottom">
            <td>
              Producto
            </td>
            <td>
            <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-dark border-0 rounded-0 py-1 m-1">X</button>
          </tr>
          <tr className="border-bottom">
            <td>
              Producto
            </td>
            <td>
            <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-dark border-0 rounded-0 py-1 m-1">X</button>
          </tr>
          <tr className="border-bottom">
            <td>
              Producto
            </td>
            <td>
            <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-dark border-0 rounded-0 py-1 m-1">X</button>
          </tr>
         </table>
        </ul>
        <BotonEnviarPedido />
      </div>
  );
};

export default CarritoPedidos;