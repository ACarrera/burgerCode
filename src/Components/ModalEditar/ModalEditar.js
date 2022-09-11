import { Modal } from "react-bootstrap";
import FormularioEditar from "../FormularioEditar/FormularioEditar";

const ModalEditar = ({ showEdit, handleCloseEdit, getUsuarios, selected }) => {
  return (
    <Modal show={showEdit} onHide={handleCloseEdit} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Agregar usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormularioEditar
          getUsuarios={getUsuarios}
          handleCloseEdit={handleCloseEdit}
          selected={selected}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalEditar;
