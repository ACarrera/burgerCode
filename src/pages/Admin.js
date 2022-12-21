import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "./Admin.css";

const Admin = () => {
  const localStorageRole = localStorage.getItem('role')
  if (localStorageRole === 'USER' || !localStorage.getItem('role')) {
    alert('No tenés autorización para ingresar a esta página')
   window.location.href  = "/login"
  }
  
  return (
    <>
    <div className="d-flex links">
          <Link to="/users" className="effect-button">
      <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burguer Fondo" className="effect-img" />
      <div className="responsive-text">
      <h2 className="title-card text-light">Usuarios</h2>
      </div>
    </Link>
     <Link to="/orders" className="effect-button">
     <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burguer Fondo" className="effect-img" />
     <div className="responsive-text">
      <h2 className="title-card text-light">Pedidos</h2>
      </div>
   </Link>
   <Link to="/menus" className="effect-button">
     <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burguer Fondo" className="effect-img" />
     <div className="responsive-text">
      <h2 className="title-card text-light">Menús</h2>
      </div>
   </Link>
    </div>
  <Footer />
    </>
  );
};

export default Admin;
