import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import { ADD_USER_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";

const RegisterModal = ({show, setShow, getUsers}) => {
  const handleClose = () => setShow(false);
  
  const UserRegister = async()=>{
    try {
      await axiosInstance.post('/users',values);
      getUsers()
    } catch (error) {
      alert('Error al agregar usuario')
    }
  }
  const {handleChange, handleSubmit, values} = useForm(ADD_USER_VALUES,UserRegister);


  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate</Modal.Title>
        </Modal.Header>
          <form onSubmit={handleSubmit}>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="mb-3 w-100"
          >
            <Form.Control
              type="text"
              onChange={handleChange}
              name='name'
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Apellido"
            className="mb-3"
          >
            <Form.Control
              type="text"
              className=""
              onChange={handleChange}
              name='lastname'
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3 w-100"
          >
            <Form.Control
              type="email"
              onChange={handleChange}
              name='email'
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
              onChange={handleChange}
              name='password'
              required
            />
          </FloatingLabel>
        </Modal.Body>
          <Button variant="primary" type="submit" className="m-3"onClick={handleClose}>
            Registarse
          </Button>
          </form>
      </Modal>
  )
}
 
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
