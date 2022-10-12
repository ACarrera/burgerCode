// import { useEffect, useState } from 'react';
import ButtonRequest from '../ButtonRequest/ButtonRequest';
import LogueoPedidos from '../LogueoPedidos/LogueoPedidos';
// import TrashIcon from './assets/images/trashicon.svg';
import './Requests.css';
// import axios from 'axios';

const CarritoPedidos = (item) => {

  return (
      <div className="carrito-pedidos d-wrap me-1 borde bg-light">
        <LogueoPedidos />
        <ul class="list-group list-group-flush d-flex text-center">
        <table>
          <tr className="productos-carrito border-bottom">
            <td>
              Producto
            </td>
            <td>
              <strong>Precio</strong>
            </td>
            <button type="button" class="btn btn-dark border-0 rounded-0 py-0 m-1">
              <b>X</b>
            </button>
          </tr>
         </table>
        </ul>
        <h5 className="text-center bg-warning"><b>Total: $1234</b></h5>
        <div className="comentarios-pedidos m-3 m-md-0 text-center">
         <label for="exampleFormControlTextarea1" className="form-label">Comentarios</label>
        <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="4" maxLength="100" placeholder="Dejanos alguna especificación"></textarea>
        </div>
        <ButtonRequest />
      </div>
  );
};

export default CarritoPedidos;