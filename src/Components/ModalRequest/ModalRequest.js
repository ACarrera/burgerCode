import { useForm } from 'react-hook-form';
import { useState } from "react";

const ModalRequest = ({menu, id}) => {
  const { register, handleSubmit } = useForm();
  const [request, setRequest] = useState()
  const idMenu = `#menu${id}` 
  const menuIdModal = `menu${id}`

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

  return (
<>
<button type="button" className="boton-agregarproducto-carrito btn btn-warning rounded-0 rounded-0" data-bs-toggle="modal" data-bs-target={idMenu}>✓</button>

<div className="modal fade" id={menuIdModal} aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content border-0 rounded-0">
  <div className="modal-body fs-5">
    Revisá tu pedido antes de enviar:
    <form onSubmit={handleSubmit(sendRequest)}>
<label className="form-label m-0 p-0 fs-6">Menu</label>
<input type="text" className="form-control p-0 m-0 text-danger fs-5 border-0"  {...register("menu", { required: true })} required aria-describedby="emailHelp" value={menu.menu} />
<label className="form-label m-0 fs-6">Descripción</label>
<input type="text" className="form-control p-0 m-0 text-danger fs-5 border-0" {...register("description", { required: true })} required value={menu.description} />
<label className="form-label m-0 fs-6">Precio</label>
<input type="number" className="form-control p-0 m-0 text-danger fs-5 border-0" {...register("price", { required: true })} required value={menu.price} />
<label className="form-label m-0 fs-5">¿Alguna especificación?</label>
<input type="text" className="form-control p-1 m-0 text-danger fs-5 rounded-0" {...register("specification", { required: true })} required defaultValue="Ninguna especificación"/>
<div className="p-0 mt-3 d-flex justify-content-end">
<button type="button" className="btn btn-danger me-1 rounded-0 border-0"data-bs-dismiss="modal">Volver</button>
<button type="submit" className="btn btn-warning rounded-0 border-0" data-bs-dismiss="modal">Enviar</button>
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