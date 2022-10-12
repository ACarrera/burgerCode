import './CardsRequest.css';

const CardsRequest = ({menu = []}) => {

  return (
    <div className="requests d-flex justify-content-evenly flex-wrap col py-3">
      {
        menu.map((item, index) => (
      <div className="card-pedidos card col-3 rounded-0 m-1" key={item._id}>
       <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top border-0 rounded-0 border-0 rounded-0" alt="..." />
       <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.descripcion}</p>
        <div className="d-flex justify-content-between align-items-center">
         <button onClick={() => localStorage.setItem("id", item._id) + console.log(item)} className="boton-agregarproducto-carrito btn btn-warning rounded-0 rounded-0" id={item._id}>✓</button>
         <p className="fs-4 m-0">${item.precio}</p>
         </div>
       </div>
      </div>
      ))
    }
    </div>
  );
};

export default CardsRequest;