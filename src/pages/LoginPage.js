import Footer from "../Components/Footer/Footer";
import LoginForm from "../Components/LoginForm/LoginForm"
import './LoginPage.css'

const LoginPage = () => {
  localStorage.clear()
  return ( 
    <div className="background-login">
    <LoginForm />
    <Footer />
    </div>
   );
}
 
export default LoginPage;