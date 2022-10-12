import CustomCarousel from "../Components/Gallery/Gallery";
import {GiWheat,} from "react-icons/gi";
import {useContext} from "react";
import {UserContext} from '../context/UserContext';
import './Home.css';
import CardsHome from "../Components/CardHome/CardsHome";
import CardsCarta from "../Components/CardHome/CardsCarta";
import Footer from "../Components/Footer/Footer";



const HomePage = () => {
  const {logout} = useContext(UserContext);

    return (  
    <>
    <button className="btn" onClick={logout}> Cerrar sesión</button>
      <div className="home-container">
        <CustomCarousel/>
        <div className="mt-5 text-center pagina-text">
        <h4 className="text-center pagina-text mt-6">DE LOS MEJORES INGREDIENTES</h4>
        <span className="premium"><GiWheat className="bg-white text-sunglow"/>Nacen nuestras</span> <span className="text-sunglow burgers">Hamburguesas <GiWheat className="bg-white text-sunglow"/></span>
        <p className="pagina-text text-center">BurgerCode nace de una necesidad del cliente, revolucionar la hamburguesa tradicional, apostamos por la carne de primera calidad cocinada a la parrilla, acompañada de los mejores ingredientes combinándolos de forma sorprendente y donde todo se hace al momento.</p>
        <CardsHome/>
        <span className="text-sunglow  burgers"><GiWheat className="bg-white text-sunglow"/>Burgers</span><span className="text-richblack premium">Code<GiWheat className="bg-white text-sunglow"/></span>
        <h4>TODAS NUESTRAS BURGERS ESTÁN HECHAS A LA PARRILLA Y LLEVAN NUESTRA SALSA ESPECIAL</h4>
        <p>Hemos elegido el tipo de pan que mejor le va a cada burger, el pan de hamburguesa con semillas de amapola o el artesano, pero puedes cambiarlo si lo deseas o sencillamente pedirla sin pan. También disponemos de pan sin gluten.</p>
        </div>
        <CardsCarta/>
        <Footer/>
      </div>
    </>
    );
}
 
export default HomePage;