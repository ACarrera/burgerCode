// import Header from "../Components/Header/Header";
// import { useEffect } from "react";
import { useState } from "react";
import { Form, Button} from "react-bootstrap";
import './Login.css';
// import axiosInstance from "../config/axiosInstance";
import ModalRegistro from "../Components/ModalRegistro/ModalRegistro";










function LoginForm() {
  const [showRegistro, setShowRegistro] = useState(false);
  const handleCloseRegistro = () => setShowRegistro(false);
  const handleShowRegistro = () => setShowRegistro(true);
  return (
    <Form className="container w-50 pt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" />
        <Form.Text className="text-muted">
          No compartiremos tu información con nadie.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <div className="">
      <Button variant="primary" type="submit" className="p-1 btn btn-dark">
        Iniciar Sesión
      </Button>
      {/* <Button type="submit" variant="primary" className="p-1 btn btn-dark" onClick={handleShowRegistro}
          Agregar Usuario
        /> */}
        <button className="ms-2 p-1 btn btn-dark" onClick={handleShowRegistro}>
          Registrarse
        </button>
      </div>
      <ModalRegistro
        handleCloseRegistro={handleCloseRegistro}
        showRegistro={showRegistro}
        />


    </Form>
  );
}


export default LoginForm;
