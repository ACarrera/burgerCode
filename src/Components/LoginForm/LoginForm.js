import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';
import { LOGIN_INITIAL_VALUES } from '../../constants';
import { UserContext } from '../../context/UserContext';
import { validationLogin } from '../../helpers/validations';
import useForm from '../../hooks/useForm';
import useMediaQuery from '../../hooks/useMediaQuery';
import RegisterModal from '../RegisterModal/RegisterModal'
import './LoginForm.css'

const LoginForm = () => {
  const {width} = useMediaQuery();

  const {login, authenticated} = useContext(UserContext);
  const navigate = useNavigate();
  const {values, handleChange, handleSubmit, errors} = useForm(LOGIN_INITIAL_VALUES,login, validationLogin);

  const [users, setUsers] = useState(null);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const getUsers = async()=>{
    try {
      const response = await axiosInstance.get('/users');
      console.log(response.data);
      setUsers(response.data.users)
    } catch (error) {
      alert('Error al traer los usuarios');
    }
  }



  useEffect(()=>{
    if(authenticated){
      navigate('/home');
    }
  },[authenticated])
  
  return ( 
    <>
    <div className='container mt-3'>
    <h4 className='container d-flex justify-content-center text-color'>Para ordenar tu burger primero inicia sesión.</h4>
    <div className="container mt-3 login-portada col d-flex justify-content-around align-items-center">
      <div className="login-portada-text col-6">
        <form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Dirección de correo electrónico"
            className="mb-3 w-100"
            >
            <Form.Control
              type="email"
              placeholder="nombre@ejemplo.com"
              className="w-100"
              onChange={handleChange}
              name='email'
              required
              />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              name='password'
              required
            />
          </FloatingLabel>
          <Button className="mt-2 me-2 btn-color" type="submit">Ingresar</Button>
          {
            Object.keys(errors).length!==0?
            Object.values(errors).map(error=> <Alert variant='danger'>{error}</Alert>)
            :
            null
            
          }
        <Button className="mt-2 btn-color" type="submit" onClick={handleShow}>Registrarse
        </Button>
        <RegisterModal show={show} setShow={setShow} getUsers={getUsers}/>
        </form>
      </div>
      {width>992?
      <div className='container col-6 d-flex justify-content-end'> 
      <img className='wrapper-img' src='https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3Vlc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
      </div>
      :
      <div></div>
    }
    </div>
    </div>
  </>
  );
}
 
export default LoginForm;