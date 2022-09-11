import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormularioAgregar from "../FormularioAgregar/FormularioAgregar";

const ModalAgregar = ({ showAdd, handleCloseAdd, getUsuarios }) => {
  return (
    <Modal show={showAdd} onHide={handleCloseAdd} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Agregar usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormularioAgregar
          getUsuarios={getUsuarios}
          handleCloseAdd={handleCloseAdd}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalAgregar;
