import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const EditMenuModal = ({ menu, id }) => {
  const { register, handleSubmit } = useForm();
  const [editMenu, setEditMenu] = useState();

  const idMenuEdit = `#menu${id}`;
  const menuIdModalEdit = `menu${id}`;

  const sendEdit = async (data) => {
    if (window.confirm(`¿Estás seguro de la modificación de ${menu.menu}?`)) {
      await axios.put(
        "https://burguercode-db.onrender.com/editmenu",
        data
        );
        setEditMenu(data);
      alert(`Menú ${menu.menu} modificado exitosamente`);
      window.location.href = "/adminmenus";
    }
  };

  return (
    <div className="modal-admin">
      <button
        type="button"
        className="btn btn-success ms-1 rounded-0 border-0"
        data-bs-toggle="modal"
        data-bs-target={idMenuEdit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-pencil-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </button>

      <div
        className="modal fade"
        id={menuIdModalEdit}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-success text-light rounded-0 border-0">
            <div className="modal-body fs-5">
              <h3>Editar menú</h3>
              <form onSubmit={handleSubmit(sendEdit)}>
                <div className="d-flex justify-content-end">
              <label className="form-label m-0 fs-6 text-dark">ID:</label>
                <input type="text" value={menu._id} {...register("_id", { required: true })} className="w-50 ps-2 text-start bg-success border-0 rounded-0 fs-6"/>
                </div>
                <label className="form-label m-0 fs-6">Menu</label>
                <input
                  type="text"
                  className="form-control p-1 m-0 rounded-0 border-0"
                  required
                  aria-describedby="emailHelp"
                  maxLength="15"
                  defaultValue={menu.menu}
                  {...register("menu", { required: true, maxLength: 15 })}
                />
                <label className="form-label m-0 fs-6">Descripción</label>
                <textarea
                  className="form-control p-1 rounded-0 border-0"
                  maxLength="65"
                  required
                  defaultValue={menu.description}
                  {...register("description", {
                    required: true,
                    maxLenght: 65,
                  })}
                />
                <label className="form-label m-0 fs-6">Precio</label>
                <input
                  type="number"
                  min="1"
                  max="9999"
                  className="form-control p-1 rounded-0 border-0"
                  required
                  defaultValue={menu.price}
                  {...register("price", { required: true, min: 1, max: 9999 })}
                />
                <div className="p-0 mt-2 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-danger rounded-0 border-0 me-1"
                    data-bs-dismiss="modal"
                  >
                    Volver
                  </button>
                  <button
                    type="submit"
                    className="btn btn-warning rounded-0 border-0"
                  >
                    Modificar
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

export default EditMenuModal;
