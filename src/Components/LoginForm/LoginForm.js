import { FloatingLabel, Form, Button } from "react-bootstrap";
import useMediaQuery from "../../hooks/useMediaQuery";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./LoginForm.css";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { width } = useMediaQuery();
  const { register, handleSubmit } = useForm();


  const handleLogin = async (data) => {
    const resp = await fetch('https://burguercode-db.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json();

    try {
      if (json.user.role === 'ADMIN') {
        localStorage.setItem('access-token', json.token)
        localStorage.setItem('role', json.user.role)
      window.location.href = '/admin'
      } else if (json.user.role === 'USER') {
        localStorage.setItem('access-token', json.token)
        localStorage.setItem('role', json.user.role)
        localStorage.setItem('name', json.user.name)
        localStorage.setItem('lastname', json.user.lastname)
        localStorage.setItem('address', json.user.address)
        localStorage.setItem('phone', json.user.phone)
      window.location.href = '/home'
      } 
    } catch (error) {
      alert('El usuario o la contraseña que ingresaste no es correcto')
    }
  }

  return (
    <>
      <div className="loginpage container pt-3">
        <div className="container mt-1 login-portada col d-flex justify-content-around align-items-center">
          <div className="login-portada-text col-6">
            <h4 className="mb-4 text-light">INICIÁ SESIÓN O REGISTRATE</h4>
            <form onSubmit={handleSubmit(handleLogin)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Dirección de correo electrónico"
                className="mb-3 w-100"
              >
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  className="w-100 rounded-0"
                  name="email"
                  required
                  minLength='2'
                  maxLength='30'
                  {...register("email", { require: true })}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Contraseña">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  minLength='8'
                  maxLength='30'
                  className="rounded-0"
                  {...register("password", { require: true })}
                />
              </FloatingLabel>
              <Button className="mt-2 me-2 btn-warning rounded-0" type="submit">
                Ingresar
              </Button>
            </form>
                  <RegisterModal />
          </div>
          {width > 992 ? (
            <div className="container col-6 d-flex justify-content-end">
              <img
                className="wrapper-img m-2"
                alt="Burguer Login"
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3Vlc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ></img>
            </div>
          ) : (
            <div></div>
            )}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
