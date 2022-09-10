import React from 'react';
import BotonEnviarPedido from '../BotonEnviarPedido/BotonEnviarPedido';
import LogueoPedidos from '../LogueoPedidos/LogueoPedidos';
import TrashIcon from './assets/images/trashicon.svg'

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
            <button type="button" class="btn btn-light border-0 rounded-0 py-1 m-1">
              <img src={TrashIcon} alt=""/>
            </button>
          </tr>
          <tr className="border-bottom">
            <td>
              Producto
            </td>
            <td>
            <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-light border-0 rounded-0 py-1 m-1">
              <img src={TrashIcon} alt=""/>
            </button>
          </tr>
          <tr className="border-bottom">
            <td>
              Producto
            </td>
            <td>
            <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-light border-0 rounded-0 py-1 m-1">
              <img src={TrashIcon} alt=""/>
            </button>
          </tr>
          <tr className="border-bottom">
            <td>
              Producto
            </td>
            <td>
            <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-light border-0 rounded-0 py-1 m-1">
              <img src={TrashIcon} alt=""/>
            </button>
          </tr>
         </table>
        </ul>
        <h5 className="text-center m-2 bg-warning">Total: $1234</h5>
        <div className="m-3 text-center">
         <label for="exampleFormControlTextarea1" className="form-label">Comentarios</label>
        <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3" maxLength="100" placeholder="Dejanos alguna especificación"></textarea>
        </div>
        <BotonEnviarPedido />
      </div>
  );
};

export default CarritoPedidos;