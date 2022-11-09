import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import { validationRegister } from "../../helpers/validations";
import { ADD_USER_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";
import "../RegisterModal/RegisterModal.css";

const RegisterModal = ({ show, setShow, getUsers }) => {
  const handleClose = () => setShow(false);

  const validationRegister = async () => {
    try {
      await axiosInstance.post("/users", values);
      getUsers();
    } catch (error) {
      alert("Error al agregar usuario");
    }
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    ADD_USER_VALUES,
    validationRegister
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrate</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput3"
            label="Email"
            className="mb-3 w-100"
          >
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              required
              minLength="2"
              maxLength="30"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput1"
            label="Nombre"
            className="mb-3 w-100"
          >
            <Form.Control
              type="text"
              onChange={handleChange}
              name="name"
              required
              minLength="2"
              maxLength="20"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput2"
            label="Apellido"
            className="mb-3"
          >
            <Form.Control
              type="text"
              className=""
              onChange={handleChange}
              name="lastname"
              required
              minLength="2"
              maxLength="25"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput2"
            label="Direccion"
            className="mb-3"
          >
            <Form.Control
              type="text"
              className=""
              onChange={handleChange}
              name="email"
              required
              minLength="2"
              maxLength="30"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput4"
            label="Contraseña"
            className="mb-3 w-100"
          >
            <Form.Control
              type="password"
              onChange={handleChange}
              name="password"
              required
              minLength="8"
              maxLength="30"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput5"
            label="Confirmar contraseña"
            className="mb-3 w-100"
          >
            <Form.Control
              type="password"
              onChange={handleChange}
              name="password2"
              required
              minLength="8"
              maxLength="30"
            />
          </FloatingLabel>
        </Modal.Body>
        <Button
          variant="primary"
          type="submit"
          className="m-3 btn-color"
          onClick={handleClose}
        >
          Registarse
        </Button>
      </form>
    </Modal>
  );
};

export default RegisterModal;

// // import { useState } from "react";
// import { Button , Modal } from "react-bootstrap";
// import RegisterForm from "../RegisterForm/RegisterForm";

// const RegisterModal = ({ showRegister, handleCloseRegister, getUsers }) => {
// return (
//     <Modal show={showRegister} onHide={handleCloseRegister} centered backdrop="static">
//       <Modal.Header closeButton>
//         <Modal.Title>Registrarse</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <RegisterForm
//           getUsers={getUsers}
//           handleCloseRegister={handleCloseRegister}
//         />
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default RegisterModal;
