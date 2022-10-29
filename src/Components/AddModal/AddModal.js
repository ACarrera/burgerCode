import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import { ADD_USER_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";

const AddModal = ({ show, setShow, getUsers }) => {
  const handleClose = () => setShow(false);

  const addUser = async () => {
    try {
      await axiosInstance.post("/users/", values);
      getUsers();
    } catch (error) {
      alert("Error al agregar el usuario");
    }
  };
  const { handleChange, handleSubmit, values } = useForm(
    ADD_USER_VALUES,
    addUser
  );

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Agregar usuario</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="ejemplo@gmail.com"
              className=""
              onChange={handleChange}
              name="email"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Contraseña"
            className="mb-3 w-100"
          >
            <Form.Control
              type="password"
              placeholder="Contraseña"
              className=""
              onChange={handleChange}
              name="pass"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="mb-3 w-100"
          >
            <Form.Control
              type="text"
              placeholder="Nombre"
              className=""
              onChange={handleChange}
              name="name"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Dirección"
            className="mb-3 w-100"
          >
            <Form.Control
              type="text"
              placeholder="Ej: Av. Salta"
              className=""
              onChange={handleChange}
              name="address"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Teléfono"
            className="mb-3 w-100"
          >
            <Form.Control
              type="number"
              placeholder="3813425679"
              className=""
              onChange={handleChange}
              name="phone"
              required
            />
          </FloatingLabel>
        </Modal.Body>
        <Button
          variant="primary"
          type="submit"
          className="m-3"
          onClick={handleClose}
        >
          Agregr usuario
        </Button>
      </form>
    </Modal>
  );
};

export default AddModal;
