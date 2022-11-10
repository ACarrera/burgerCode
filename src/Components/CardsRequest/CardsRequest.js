// import axios from 'axios';
import './CardsRequest.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const CardsRequest = ({menu = []}) => {

  const { register, handleSubmit } = useForm();
  const [request, setRequest] = useState()

  const sendRequest = async(data) => {
    try {
      await fetch('http://localhost:4000/users/addRequest',{
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        method: 'POST',
      })
    .then(response => response.json())
    .then(data => setRequest(data));
    
    alert(`¡Recibimos tu burguerOrder de ${data.menu}!`)
    } catch (error) {
      console.log(error)
      }
    }

  return (
    <div className="requests d-flex justify-content-evenly flex-wrap col py-3">
      {
        menu.map(menu => (
          <>
      <div className="card-pedidos card col-3 rounded-0 m-1">
       <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top border-0 rounded-0 border-0 rounded-0" alt="..." />
       <div className="card-body">
        <h5 className="card-title">{menu.menu}</h5>
        <p className="card-text">{menu.description}</p>
        <div className="d-flex justify-content-between align-menus-center">
         <button type="button" className="boton-agregarproducto-carrito btn btn-warning rounded-0 rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal">✓</button>
         <p className="fs-4 m-0">${menu.price}</p>
         </div>
       </div>
      </div>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body fs-5">
        Revisá tu pedido antes de enviar:
        <form onSubmit={handleSubmit(sendRequest)}>
    <label className="form-label m-0 fs-6">Menu</label>
    <input type="text" className="form-control p-1 m-0"  {...register("menu", { required: true })} required aria-describedby="emailHelp" value={menu.menu}/>
    <label className="form-label m-0 fs-6">Descripción</label>
    <input type="text" className="form-control p-1" value={menu.description} {...register("description", { required: true })} required />
    <label className="form-label m-0 fs-6">Precio</label>
    <input type="number" className="form-control p-1" value={menu.price} {...register("price", { required: true })} required />
    <label className="form-label m-0 fs-6">¿Alguna especificación?</label>
    <input type="text" className="form-control p-1" {...register("specification", { required: true })} required defaultValue="Ninguna especificación"/>
    <div className="p-0 mt-1 d-flex justify-content-end">
    <button type="button" className="btn btn-danger me-1"data-bs-dismiss="modal">Volver</button>
    <button type="submit" className="btn btn-warning" data-bs-dismiss="modal">Enviar</button>
    </div>
</form>
      </div>
    </div>
  </div>
</div>
</>
        )
      )
    }

    </div>


  );
};

export default CardsRequest;