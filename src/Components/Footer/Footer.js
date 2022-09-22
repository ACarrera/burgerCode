import "./Footer.css";
import {FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi"
import { GiHamburger } from "react-icons/gi";

const Footer = () => {
    return ( 
        <footer className="app-footer bg-sunglow">
            <div className="footer-logo">
                <p className='logo-text'><GiHamburger className='bg-yellow text-darkred' />  BURGERCODE</p>
            </div>
            <div >
                <div className="footer-social">
                <FiFacebook href="https://www.facebook.com"/>
                <FiInstagram href="https://www.instagram.com"/>
                <FiTwitter href="https://www.twitter.com"/>
                </div>
                <p className="footer-copyright"></p>
            </div>
            <div className="footer-contactanos">

            </div>

        </footer>
     );
}
 
export default Footer;
