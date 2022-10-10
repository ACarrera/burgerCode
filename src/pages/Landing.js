import './Landing.css';
import {FaHamburger} from 'react-icons/fa'

const LandingPage = () => ( 
    <div className="app-landing" id="landing">
        <div className="app-wrapper-info">
            <h3 className="h3-landing card-text">la mejor <FaHamburger className="h3-icon"/></h3>
            <h1 className="app-landing-h1 card-text h1-landing">burger</h1>
            <h4 className="card-text h4-landing" style={{margin: '2rem 0'}}>INGREDIENTES ESPECIALES</h4>
            <p className="card-text p-landing">Carne de calidad, verduras frescas y pan casero recién salidos del horno.</p>
            <button type="button" className="custom-button card-text">Quiero mi Burger</button>
        </div>
        <div className='bordes-img'>
            <div className="app-wrapper-img">
                <img
                src="https://media.istockphoto.com/photos/tasty-grilled-home-made-burger-picture-id945053910?k=20&m=945053910&s=612x612&w=0&h=h4VALU-pvfvXEl7YVKUpxj49XG_l73JR3xwxMyVBTG4="
                alt="img-landing">         
                </img>
            </div>
        </div>
    </div>
);

 
export default LandingPage;