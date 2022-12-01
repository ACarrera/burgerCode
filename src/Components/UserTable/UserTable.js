import { useEffect } from "react";
import { useState } from "react";
import { Table, Button, Spinner, Container } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";

import "./UserTable.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  const getUsers = async () => {
    try {
      const response = await axiosInstance.get("/allusers");
      setUsers(response.data.users);
    } catch (error) {
      alert("error al traer los usuarios");
    }
  };
  const handleEdit = (id) => {
    setSelected(id);
    handleShowEdit();
  };
  const userDelete = async (id) => {
    try {
      await axiosInstance.delete("/allusers/" + id);
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
      <Container fluid>
        <div className="d-flex justify-content-end me-5">
          <button className="add-button-style" onClick={handleShowAdd}>
            <FcPlus />
          </button>
        </div>
        {users.length === 0 ? (
          <Spinner animation="border" role="status" />
        ) : (
          <Table responsive className="abmTable">
            <thead className="tableHead text-center">
              <tr>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Editar Usuario</th>
                <th>Borrar Usuario</th>
              </tr>
            </thead>
            <tbody className="tableBody text-center">
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(user.id)}
                      className="mx-3 editUser"
                      class="edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-person-lines-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                      </svg>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => userDelete(user.id)}
                      className="mx-3"
                      class="deleteUser"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-person-x-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
      <AddModal
        handleCloseAdd={handleCloseAdd}
        show={showAdd}
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
