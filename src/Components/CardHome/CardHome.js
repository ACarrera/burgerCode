import './CardHome.css';
import { Card } from "react-bootstrap";

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


    