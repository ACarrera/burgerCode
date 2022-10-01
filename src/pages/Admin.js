import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link className="text-decoration-none" to="/request">
            Menu
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link className="text-decoration-none" to="/request">
            Pedidos
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Admin;
