import CustomCarousel from "../Components/CustomCarousel/CustomCarousel";
import {GiWheat,} from "react-icons/gi";
import './LandingPage.css'
import CardHome from "../Components/Card/CardHome";


const HomePage = () => {
    return (  
    <>
      <CustomCarousel/>
      <div className="mt-5 text-center pagina-text">
      <h4 className="text-center pagina-text mt-6">DE LOS MEJORES INGREDIENTES</h4>
      <span className="premium"><GiWheat className="bg-white text-sunglow"/>Nacen nuestras</span> <span className="text-sunglow burgers">Hamburguesas <GiWheat className="bg-sunglow text-white"/></span>
      <p className="pagina-text text-center">BurgerCode nace de una necesidad del cliente, revolucionar la hamburguesa tradicional, apostamos por la carne de primera calidad cocinada a la parrilla, acompañada de los mejores ingredientes combinándolos de forma sorprendente y donde todo se hace al momento.</p>
      <CardHome/>
      <span className="text-sunglow  burgers"><GiWheat className="bg-white text-sunglow"/>Burgers</span>  <span className="text-richblack premium">Premium<GiWheat className="bg-white text-sunglow"/></span>
      <h4>TODAS NUESTRAS BURGERS ESTÁN HECHAS A LA PARRILLA Y LLEVAN NUESTRA SALSA ESPECIAL</h4>
      <p>Hemos elegido el tipo de pan que mejor le va a cada burger, el pan de hamburguesa con semillas de amapola o el artesano, pero puedes cambiarlo si lo deseas o sencillamente pedirla sin pan. También disponemos de pan sin gluten.</p>
      </div>

    </>
    );
}
 
export default HomePage;