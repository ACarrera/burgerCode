// import { useState } from "react";
import { Button , Modal } from "react-bootstrap";
import RegisterForm from "../RegisterForm/RegisterForm";

const RegisterModal = ({ showRegister, handleCloseRegister, getUsers }) => {
return (
    <Modal show={showRegister} onHide={handleCloseRegister} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegisterForm
          getUsers={getUsers}
          handleCloseRegister={handleCloseRegister}
        />
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
