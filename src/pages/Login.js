// import Header from "../Components/Header/Header";
import { Form, Button} from "react-bootstrap";
import './Login.css'



function LoginForm() {
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
      <Button variant="primary" type="submit" className="p-1 btn btn-dark">
        Iniciar Sesión
      </Button>
      <Button variant="primary" type="submit" className="ms-2 p-1 btn btn-dark">
      Registrarse  
      </Button>
    </Form>
  );
}


export default LoginForm
