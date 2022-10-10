import { useEffect } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import { ADD_USER_VALUES } from "../../constants/";
import useForm from "../../hooks/useForm";

const EditModal = ({ show, setShow, getUsers, selected }) => {
  const handleClose = () => setShow(false);

  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/users/" + selected);
      setValues(response.data.user);
    } catch (error) {
      alert("Error al traer el usuario");
    }
  };
  const editUser = async () => {
    try {
      await axiosInstance.put("/users/" + selected, { update: values });
      getUsers();
    } catch (error) {
      alert("Error al editar el usuario");
    }
  };

  useEffect(() => {
    getUser();
  }, [selected]);
  const { handleChange, handleSubmit, values, setValues } = useForm(
    ADD_USER_VALUES,
    editUser
  );

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Editar usuario</Modal.Title>
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
              value={values.email}
              name="email"
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
              value={values.name}
              name="name"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label=""
            className="mb-3 w-100"
          >
            <Form.Control
              type="text"
              placeholder="100"
              className=""
              onChange={handleChange}
              value={values.address}
              name="address"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label=""
            className="mb-3 w-100"
          >
            <Form.Control
              type="number"
              placeholder="3813425679"
              className=""
              onChange={handleChange}
              value={values.phone}
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
          Guardar usuario
        </Button>
      </form>
    </Modal>
  );
};

export default EditModal;
