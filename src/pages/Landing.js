import './Landing.css';

const LandingPage = () => {
    return ( 
    <div className="bg-yellow landing">
    <div>
    <p className="text-darkred titulo-landing">LA MEJOR </p>
    <p className="text-darkred hamburguesa">HAMBURGUESA</p>
    <p>Ingredientes Especiales</p>
    <p>salsas, panes, verduras y mucho mas</p>
    <button classNAme="text-white bg-sunglow"> INGRESAR</button>
    </div>
    <div >
    <img
    src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3Vlc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    alt="burgerlanding"
    />
    </div>
    </div>
    
     );
}
 
export default LandingPage;