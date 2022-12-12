import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "./Admin.css";

const Admin = () => {
  return (
    <>
    <div className="d-flex">
          <Link to="/users" className="effect-button col-4">
      <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="stevia" className="effect-img" />
      <div className="responsive-text">
      <h2 className="title-card text-light">Usuarios</h2>
      </div>
    </Link>
     <Link to="/addorders" className="effect-button col-4">
     <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="effect-img" />
     <div className="responsive-text">
      <h2 className="title-card text-light">Pedidos</h2>
      </div>
   </Link>
   <Link to="/menu" className="effect-button col-4">
     <img src="https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="effect-img" />
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
