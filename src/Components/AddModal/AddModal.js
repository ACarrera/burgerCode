import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddForm from "../AddForm/AddForm";

const AddModal = ({ showAdd, handleCloseAdd, getUsers }) => {
  return (
    <Modal show={showAdd} onHide={handleCloseAdd} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Agregar usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm getUsers={getUsers} handleCloseAdd={handleCloseAdd} />
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
