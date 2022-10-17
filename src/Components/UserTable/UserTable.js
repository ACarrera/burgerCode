import { useEffect } from "react";
import { useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";
import "./UserTable.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleShow = () => setShow(true);
  const handleShowEdit = () => setShowEdit(true);

  const getUsers = async () => {
    try {
      const response = await axiosInstance.get("/users/alls");
      setUsers(response.data.users);
    } catch (error) {
      alert("error al traer los usuarios");
    }
  };
  const userDelete = async () => {
    try {
      await axiosInstance.delete("/users/alls", {
        data: { email: selected },
      });
      getUsers();
    } catch (error) {
      alert("Error al eliminar");
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-around my-3">
        <Button variant="success" onClick={handleShow} className="mx-3">
          Agregar usuario
        </Button>
        <Button variant="warning" onClick={handleShowEdit} className="mx-3">
          Editar usuario
        </Button>
        <Button variant="danger" onClick={userDelete} className="mx-3">
          Eliminar usuario
        </Button>
      </div>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Direccion</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            user.email === selected ? (
              <tr
                className="selected"
                onClick={() => setSelected(user.email)}
                key={user.email}
              >
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            ) : (
              <tr onClick={() => setSelected(user.email)} key={user.email}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>

      <AddModal show={show} setShow={setShow} getUsers={getUsers} />
      <EditModal showEdit={showEdit} getUsers={getUsers} selected={selected} />
    </>
  );
};

export default UserTable;
