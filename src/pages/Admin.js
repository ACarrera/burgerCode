import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "./Admin.css";
import { useEffect } from "react";

const Admin = () => {
  
  return (
    <>
    <div className="d-flex">
          <Link to="/adminusers" className="effect-button col-lg-4 col-md-4 col-xs-12">
      <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burguer Fondo" className="effect-img" />
      <div className="responsive-text">
      <h2 className="title-card text-light">Usuarios</h2>
      </div>
    </Link>
     <Link to="/adminorders" className="effect-button col-lg-4 col-md-4 col-xs-12">
     <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burguer Fondo" className="effect-img" />
     <div className="responsive-text">
      <h2 className="title-card text-light">Pedidos</h2>
      </div>
   </Link>
   <Link to="/adminmenus" className="effect-button col-lg-4 col-md-4 col-xs-12">
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
