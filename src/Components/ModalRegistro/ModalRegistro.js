// import { useState } from "react";
import { Button , Modal } from "react-bootstrap";
import FormularioRegistro from "../FormularioRegistro/FormularioRegistro";

const ModalRegistro = ({ showRegistro, handleCloseRegistro, getUsuarios }) => {
return (
    <Modal show={showRegistro} onHide={handleCloseRegistro} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormularioRegistro
          getUsuarios={getUsuarios}
          handleCloseRegistro={handleCloseRegistro}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalRegistro;
