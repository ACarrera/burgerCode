import "./Footer.css";
import {FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi"
import { GiHamburger } from "react-icons/gi";

const Footer = () => {
    return ( 
        <footer className="app-footer">
            <div className="app-footer-links">
                <div className="footer-links-logo">
                    <h1 className='logo-text'><GiHamburger className='bg-yellow text-darkred' /> BURGERCODE</h1>
                    <p className="card-text">"La mejor forma de encontrarte es perdiendote en el servicio de otros."</p>
                </div>
                <div className="footer-links-social">
                    <FiFacebook href="https://www.facebook.com"/>
                    <FiInstagram href="https://www.instagram.com"/>
                    <FiTwitter href="https://www.twitter.com"/>
                </div>
                <div className="footer-links-contactanos">
                    <h1>Contáctanos</h1>
                    <p className="card-text">Gral. Paz 576,San Miguel de Tucumán, Tucumán, Argentina.</p>
                    <p className="card-text">Lunes a Viernes 08-19 hs.</p>
                    <p className="card-text">+54 381 578-3030</p>
                </div>
            </div>
                    <div>
                        <p className="footer-copyright">2022 BurgerCode. Todos los derechos reservados.</p>
                    </div>
            
        </footer>
     );
}
 
export default Footer;
