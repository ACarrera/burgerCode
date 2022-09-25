import './CardHome.css';
import { Card } from "react-bootstrap";
import {GiMasonJar, GiFrenchFries, GiForkKnifeSpoon} from "react-icons/gi"
import {TbBread, TbCheese} from "react-icons/tb";
import{BiDrink} from "react-icons/bi";
import{RiTeamLine, RiHomeSmileLine} from "react-icons/ri"

const CardHome = ({icon, tituloIng, descripcionIng}) => {
    return ( 
      <Card style={{ width: '18rem' }} >
        <Card.Body className='card-ingredientes'>
          {icon}
          <Card.Title>{tituloIng}</Card.Title>
          <Card.Text >{descripcionIng}</Card.Text>
        </Card.Body>
      </Card>
     );
}
 
export default CardHome;


    