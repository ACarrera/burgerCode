import { Modal } from "react-bootstrap";
import FormularioEditar from "../EditForm/EditForm";

const EditModal = ({ showEdit, handleCloseEdit, getUsers, selected }) => {
  return (
    <Modal show={showEdit} onHide={handleCloseEdit} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Agregar usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormularioEditar
          getUsers={getUsers}
          handleCloseEdit={handleCloseEdit}
          selected={selected}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
