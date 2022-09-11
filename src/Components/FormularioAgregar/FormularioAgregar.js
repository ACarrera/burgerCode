import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";

const FormularioAgregar = ({ getUsuarios, handleCloseAdd }) => {
  const [values, setValues] = useState({
    email: "",
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: 0,
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axiosInstance.post("/usuarios", values);
      getUsuarios();
    } catch (error) {
      alert("Error al cargar nuevo usuario");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          onChange={handleChange}
          value={values.nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          onChange={handleChange}
          value={values.apellido}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          name="direccion"
          onChange={handleChange}
          value={values.direccion}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          name="telefono"
          onChange={handleChange}
          value={values.telefono}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleCloseAdd}>
        Agregar
      </Button>
    </Form>
  );
};

export default FormularioAgregar;
