import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ModalRequest = (_id) => {
  const { register, handleSubmit } = useForm();
  const [request, setRequest] = useState()

  const sendRequest = async(data) => {
    try {
      await fetch('https://burguercode-db.onrender.com/addRequest',{
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

    const [menuId, setMenuId] = useState([]);

  const getMenus = async (_id) => {
    try {
      const info = await axios.get(`https://burguercode-db.onrender.com/getOneMenu/${_id}`);
      console.log(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMenus();
  }, []);

  return (
<>
<button type="button" className="boton-agregarproducto-carrito btn btn-warning rounded-0 rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={console.log(_id)} >✓</button>

<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-body fs-5">
    Revisá tu pedido antes de enviar:
    <form onSubmit={handleSubmit(sendRequest)}>
<label className="form-label m-0 fs-6">Menu</label>
<input type="text" className="form-control p-1 m-0"  {...register("menu", { required: true })} required aria-describedby="emailHelp" value={menuId.menu}/>
<label className="form-label m-0 fs-6">Descripción</label>
<input type="text" className="form-control p-1" value={menuId.description} {...register("description", { required: true })} required />
<label className="form-label m-0 fs-6">Precio</label>
<input type="number" className="form-control p-1" value={menuId.price} {...register("price", { required: true })} required />
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
    
  );
};

export default ModalRequest;