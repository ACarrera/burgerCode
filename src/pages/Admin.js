import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const Admin = () => {
  return (
    <>
      <ListGroup className="m-2">
        <ListGroup.Item>
          <Link className="text-decoration-none" to="/UserTable">
            Usuarios
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link className="text-decoration-none" to="/menu">
            Menu
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link className="text-decoration-none" to="/addorders">
            Pedidos
          </Link>
        </ListGroup.Item>
      </ListGroup>
      <Footer />
    </>
  );
};

export default Admin;
