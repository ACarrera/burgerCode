import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const RegisterModal = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
const [addUser, setAddUser] = useState()
  const onSubmit = async (data) => {
await axios.post('https://burguercode-db.onrender.com/adduser', data)
.then((resp) => {
  setAddUser(resp.data)
})
    console.log(data)
    alert('El usuario ha sido creado exitosamente')
    window.location.reload()
  }
  
  return (
    <div>
<button type="button" className="btn btn-warning mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Registrarse
</button>

<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel1">Registrate</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
  <input type="email" className="form-control" placeholder="Email"
   {...register("email", { required: true, maxLength: 35, minLength: 15, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/})}
   required
   maxLenght="35"
   minLenght="15"
   />
   {errors.email && <span className="mt-1">⚠️ Debe respetar el formato nombre@mail.com</span>}
</div>
<div className="mb-3">
  <input type="text" className="form-control" placeholder="Nombre"
   {...register("name", { required: true, maxLength: 35, minLength: 1})}
   required
   maxLenght="35"
   minLenght="3"
    />
</div>
<div className="mb-3">
  <input type="text" className="form-control" placeholder="Apellido"
   {...register("lastName", { required: true, maxLength: 35, minLength: 1})}
   required
   maxLenght="35"
   minLenght="3"
    />
</div>
<div className="mb-3">
  <input type="text" className="form-control" placeholder="Dirección"
   {...register("address", { required: true, maxLength: 50, minLength: 5})}
   required
   maxLenght="50"
   minLenght="5"
    />
</div>
<div className="mb-3">
  <input type="number" className="form-control" placeholder="Número de teléfono"
   {...register("phone", { required: true, maxLength: 20, minLength: 9})}
   required
   maxLenght="20"
   minLenght="9"
    />
    {errors.phone && <span className="mt-1">⚠️ El número ingresado es demasiado corto. Ingréselo con código de área</span>}
</div>
<div className="mb-3">
  <input type="password" className="form-control" placeholder="Contraseña"
   {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/})}
   required
   maxLenght="20"
   minLenght="8"
    />
    {errors.password && <span className="mt-1">⚠️ Debe tener al menos 1 dígito, 1 mayúscula y 1 minúscula</span>}
</div>
        <button type="submit" className="btn btn-warning">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default RegisterModal;