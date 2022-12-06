import './CardsRequest.css';
import ModalRequest from '../ModalRequest/ModalRequest';

const CardsRequest = ({menu, index}) => {

console.log(menu, "menuCard")

  return (
    <div className="requests d-flex justify-content-evenly flex-wrap col py-3">
          <>
      <div className="card-request card col-3 rounded-0 m-1">
       <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top border-0 rounded-0 border-0 rounded-0" alt="..." />
       <div className="card-body">
        <h5 className="card-title">{menu.menu}</h5>
        <p className="card-text">{menu.description}</p>
        <div className="d-flex justify-content-between align-menus-center">
     <ModalRequest menu={menu} id={index}/>
         <p className="fs-4 m-0">${menu.price}</p>
         </div>
       </div>
      </div>
</>
    </div>


  );
};

export default CardsRequest;