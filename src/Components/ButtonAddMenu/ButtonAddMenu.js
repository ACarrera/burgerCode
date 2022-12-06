import {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ButtonAddMenu = () => {
  const { register, handleSubmit} = useForm()
  
  const [addMenu, setAddMenu] = useState()
  const onSubmit = async (data) => {
    await axios.post('https://burguercode-db.onrender.com/addmenu', data)
    .then((resp) => {
      setAddMenu(resp.data)
    })
        console.log(data)
        alert('Menu creado exitosamente')
        window.location.reload()
      }
  return (
    <div>
    <div className="d-flex justify-content-center">
    <button
      type="button"
      className="text-center btn btn-warning p-3 mb-4"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      AGREGAR NUEVO MENU
    </button>
  </div>
  <div
  className="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content bg-warning">
      <div className="modal-header">
        <h5>Nuevo menú</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <div className="mb-3">
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              maxLength="20"
              placeholder="Nombre"
              {...register("menu", { required: true })} required
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              id="disabledTextInput"
              className="form-control"
              maxLength="150"
              placeholder="Descripcion"
              rows="3"
              {...register("description", { required: true })} required
            />
          </div>
          <div className="mb-3">
            <div className="d-flex">
          <div className="d-flex align-items-center">
            <p className=" fs-5 m-2">$</p>
          <input
              type="number"
              id="disabledTextInput"
              className="form-control input-nombreproducto"
              maxLength="10"
              placeholder="Precio"
              {...register("price", { required: true })} required
            />
            </div>  
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-success">
              Crear menu
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default ButtonAddMenu;