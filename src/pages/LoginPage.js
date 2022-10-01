import LoginForm from "../Components/LoginForm/LoginForm"

const LoginPage = () => {
  return ( 
    <>
    <LoginForm/>
    </>
   );
}
 
export default LoginPage;













// // import Header from "../Components/Header/Header";
// // import { useEffect } from "react";
// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "./Login.css";
// // import axiosInstance from "../config/axiosInstance";
// import RegisterModal from "../Components/RegisterModal/RegisterModal";
// import Footer from "../Components/Footer/Footer";

// function LoginForm() {
//   const [showRegister, setShowRegister] = useState(false);
//   const handleCloseRegister = () => setShowRegister(false);
//   const handleShowRegister = () => setShowRegister(true);
//   return (
//     <div className="container pt-5 w-100 col d-flex  ">
//     <Form className="col-6 ">
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Ingresa tu email" />
//         <Form.Text className="text-muted">
//           No compartiremos tu información con nadie.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Contraseña</Form.Label>
//         <Form.Control type="password" placeholder="Ingresa tu contraseña" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
//       <div className="">
//         <Button variant="primary" type="submit" className="p-1 btn btn-dark">
//           Iniciar Sesión
//         </Button>
//         <button className="ms-2 p-1 btn btn-dark" onClick={handleShowRegister}>
//           Registrarse
//         </button>
//       </div>
//       <RegisterModal
//         handleCloseRegister={handleCloseRegister}
//         showRegister={showRegister}
//       />
//         </Form>

//       <div className="ms-5 col-6 d-flex burger-login justify-content-evenly ">
//         <img
//           src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3Vlc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//           alt="la burguer"
//           className=""
//         />
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
