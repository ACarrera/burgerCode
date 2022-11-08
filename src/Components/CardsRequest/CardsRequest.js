import axios from 'axios';
import './CardsRequest.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const CardsRequest = ({menu = []}) => {
  const { register, handleSubmit } = useForm();
  const [request, setRequest] = useState()

  const sendRequest = async() => {
    await axios.post("http://localhost:4000/users/addRequest")
      .then((resp) => {
        console.log(resp.json);
      });
    }

  return (
    <div className="requests d-flex justify-content-evenly flex-wrap col py-3">
      {
        menu.map(menu => (
      <div className="card-pedidos card col-3 rounded-0 m-1" key={menu._id}>
       <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top border-0 rounded-0 border-0 rounded-0" alt="..." />
       <form className="card-body" onSubmit={handleSubmit(sendRequest)}>
        <h5 className="card-title" {...register("menu")} >{menu.menu}</h5>
        <p className="card-text" {...register("description")} >{menu.description}</p>
        <div className="d-flex justify-content-between align-menus-center">
         <button type="submit" className="boton-agregarproducto-carrito btn btn-warning rounded-0 rounded-0" id={menu._id}>✓</button>
         <p className="fs-4 m-0" {...register("price")} >${menu.price}</p>
         </div>
       </form>
      </div>
      ))
    }
    </div>
  );
};

export default CardsRequest;