import {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './ButtonAddMenu.css'

const ButtonAddMenu = () => {
  const { register, handleSubmit} = useForm()
  
  const [addMenu, setAddMenu] = useState()
  const newMenu = async (data) => {
    await axios.post('https://burguercode-db.onrender.com/addmenu', data)
    .then((resp) => {
      setAddMenu(resp.data)
    })
        console.log(data)
        alert('Menu creado exitosamente')
        window.location.reload()
      }
  return (
    <div className="modal-admin">
    <div className="d-flex justify-content-center align-items-center title-tableadmin">
    <button
      type="button"
      className="text-center btn btn-warning rounded-0 border-0 fs-5"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
      AGREGAR
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
    <div className="modal-content bg-warning border-0 rounded-0">
      <div className="modal-body fs-5">
      <h3>NUEVO MENÚ</h3>
        <form onSubmit={handleSubmit(newMenu)} id="form">
          <div className="mb-3">
            <input
              type="text"
              id="disabledTextInput"
              className="form-control border-0 rounded-0"
              maxLength="20"
              placeholder="Nombre"
              {...register("menu", { required: true })} required
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              id="disabledTextInput"
              className="form-control border-0 rounded-0"
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
              className="form-control border-0 rounded-0"
              maxLength="10"
              placeholder="Precio"
              {...register("price", { required: true })} required
            />
            </div>  
            </div>
          </div>
          <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-danger rounded-0 border-0 me-1"data-bs-dismiss="modal">Volver</button>
            <button type="submit" className="btn btn-success border-0 rounded-0">
            Crear
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