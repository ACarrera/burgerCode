import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "./Admin.css";

const Admin = () => {
  return (
    <>
    <div className="d-flex">
          <Link to="/UserTable" className="contenedor-stevia col-4">
      <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="stevia" className="stevia-img" />
      <div className="stevia-text">
      <h2 className="title-card text-light">Usuarios</h2>
      </div>
    </Link>
     <Link to="/addorders" className="contenedor-stevia col-4">
     <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="stevia-img" />
     <div className="stevia-text">
      <h2 className="title-card text-light">Pedidos</h2>
      </div>
   </Link>
   <Link to="/menu" className="contenedor-stevia col-4">
     <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="stevia-img" />
     <div className="stevia-text">
      <h2 className="title-card text-light">Menús</h2>
      </div>
   </Link>
    </div>
  <Footer />
    </>
  );
};

export default Admin;
