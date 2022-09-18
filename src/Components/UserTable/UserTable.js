import { useEffect } from "react";
import { useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import axiosInstance from "../../config/axiosInstance";
import useMediaQuery from "../../hooks/useMediaQuery";
import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";
import "./TablaUsuarios.css";

const UserTable = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const [users, setUsers] = useState([]);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const getUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      setUsers(response.data);
    } catch (error) {
      alert("error al traer los usuarios");
    }
  };
  const handleDelete = async (email) => {
    try {
      await axiosInstance.delete("/users/" + email);
      getUsers();
    } catch (error) {
      alert("Error al eliminar");
    }
  };
  const handleEdit = (email) => {
    setSelected(email);
    handleShowEdit();
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="d-flex m-2">
        <button className="btn btn-warning" onClick={handleShowAdd}>
          Agregar Usuario
          <FcPlus />
        </button>
      </div>
      {usuarios.length === 0 ? (
        <Spinner animation="border" role="status" />
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td className="text-center">
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(user.email)}
                    className="me-2"
                  >
                    <AiFillEdit className="border-text" />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(user.email)}
                  >
                    <AiFillDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <AddModal
        handleCloseAdd={handleCloseAdd}
        showAdd={showAdd}
        getUsers={getUsers}
      />
      <EditModal
        handleCloseEdit={handleCloseEdit}
        showEdit={showEdit}
        getUsers={getUsers}
        selected={selected}
      />
    </>
  );
};

export default UserTable;
