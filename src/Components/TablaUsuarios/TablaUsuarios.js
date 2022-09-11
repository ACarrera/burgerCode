import { useEffect } from "react";
import { useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import axiosInstance from "../../config/axiosInstance";
import useMediaQuery from "../../hooks/useMediaQuery";
import ModalAgregar from "../ModalAgregar/ModalAgregar";
import ModalEditar from "../ModalEditar/ModalEditar";
import "./TablaUsuarios.css";

const TablaUsuarios = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const getUsuarios = async () => {
    try {
      const response = await axiosInstance.get("/usuarios");
      setUsuarios(response.data);
    } catch (error) {
      alert("error al traer los usuarios");
    }
  };
  const handleDelete = async (email) => {
    try {
      await axiosInstance.delete("/usuarios/" + email);
      getUsuarios();
    } catch (error) {
      alert("Error al eliminar");
    }
  };
  const handleEdit = (email) => {
    setSelected(email);
    handleShowEdit();
  };
  useEffect(() => {
    getUsuarios();
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
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.email}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.telefono}</td>
                <td className="text-center">
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(usuario.email)}
                    className="me-2"
                  >
                    <AiFillEdit className="border-text" />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(usuario.email)}
                  >
                    <AiFillDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <ModalAgregar
        handleCloseAdd={handleCloseAdd}
        showAdd={showAdd}
        getUsuarios={getUsuarios}
      />
      <ModalEditar
        handleCloseEdit={handleCloseEdit}
        showEdit={showEdit}
        getUsuarios={getUsuarios}
        selected={selected}
      />
    </>
  );
};

export default TablaUsuarios;
