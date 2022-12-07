import {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

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
    <div>
    <div className="d-flex justify-content-center align-items-center">
    <button
      type="button"
      className="text-center btn btn-warning rounded-0 border-0"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
      <b>AGREGAR</b>
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
      <div className="modal-header py-2">
        <h5 className="mb-0">NUEVO MENÚ</h5>
        <button
          type="button"
          className="btn-close p-3"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
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
            <button type="submit" className="btn btn-success border-0 rounded-0 px-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
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