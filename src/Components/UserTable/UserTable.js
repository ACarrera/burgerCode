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
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState([]);
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
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/users/alls");
      setUser(response.data.user);
    } catch (error) {
      alert("error al traer los usuarios");
    }
  };
  const userDelete = async () => {
    try {
      await axiosInstance.delete("/users/alls", { data: { id: selected } });
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
        <Table responsive class="abmTable">
          <thead class="tableHead text-center">
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
          <tbody class="tableBody text-center">
            {users?.map((user) =>
              user._id == selected ? (
                <tr
                  className="selected"
                  onClick={() => setSelected(user._id)}
                  key={user._id}
                >
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={handleShowEdit}
                      className="mx-3"
                      class="editUser"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-person-lines-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                      </svg>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={userDelete}
                      className="mx-3"
                      class="deleteUser"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-person-x-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              ) : (
                <tr onClick={() => setSelected(user._id)} key={user._id}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={handleShowEdit}
                      className="mx-3"
                      class="editUser"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-person-lines-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                      </svg>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={userDelete}
                      className="mx-3"
                      class="deleteUser"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-person-x-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              )
            )}
            <tr>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>

              {/* <Button
                variant="success"
                onClick={handleShow}
                className="mx-3"
                class="addUser"
              >
              <svg
              xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-person-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </Button> */}

              <td>
                <Button
                  variant="warning"
                  onClick={handleShowEdit}
                  className="mx-3"
                  class="editUser"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                  </svg>
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={userDelete}
                  className="mx-3"
                  class="deleteUser"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-person-x-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      {/* <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) =>
            user._id == selected ? (
              <tr
                className="selected"
                onClick={() => setSelected(user._id)}
                key={user._id}
              >
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            ) : (
              <tr onClick={() => setSelected(user._id)} key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            )
          )}
        </tbody>
      </Table> */}

      <AddModal show={show} setShow={setShow} getUsers={getUsers} />
      <EditModal showEdit={showEdit} getUsers={getUsers} selected={selected} />
    </>
  );
};

export default UserTable;
