import './CardHome.css';
import { Card } from "react-bootstrap";
import {GiMasonJar, GiFrenchFries, GiForkKnifeSpoon} from "react-icons/gi"
import {TbBread, TbCheese} from "react-icons/tb";
import{BiDrink} from "react-icons/bi";
import{RiTeamLine, RiHomeSmileLine} from "react-icons/ri"

const CardHome = () => {
    return ( 
    <div className="Contenedor w-100">
    <div className="Fila Cards-home">
    <Card style={{ width: '18rem' }} >
      <Card.Body className='card-ingredientes'>
      <GiMasonJar className="bg-transparent text-sunglow logo-text jc-center icons-home"/>
        <Card.Title>Las salsas</Card.Title>
        <Card.Text >
          Las salsas que tenemos en nuestra carta son recetas originales de 
          Burgercode, sin conservantes ni colorantes, totalmente naturales.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{width: '18rem' }}>
      <Card.Body className='card-ingredientes'>
      <TbBread className="bg-transparent text-sunglow logo-text icons-home"/>
        <Card.Title>El pan</Card.Title>
        <Card.Text>
          Fresco y artesano. Cada día, un
          panadero local nos sirve dos tipos
          de pan de masa madre. También hay pan 
          sin gluten oara tu burger favorita.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='card-ingredientes'>
      <GiFrenchFries className="bg-transparent text-sunglow logo-text icons-home"/>
        <Card.Title>Las patatas</Card.Title>
        <Card.Text>
          Nuestras patatas fritas gruesas
          son caseras y cortadas a mano,
          deliciosas. Nuestra Yuca, casi
          tiene un club de fans!
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='card-ingredientes'>
      <TbCheese className="bg-transparent text-sunglow logo-text icons-home"/>
        <Card.Title>El queso</Card.Title>
        <Card.Text>
          Mas de 10 quesos diferentes
          para nuestras hamburguesas,
          ensaladas y entrantes.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="Fila Cards-home">
    <Card style={{ width: '18rem' }}>
      <Card.Body className='card-ingredientes'>
      <GiForkKnifeSpoon className="bg-transparent text-sunglow logo-text icons-home"/>
        <Card.Title>El servicio</Card.Title>
        <Card.Text>
          Es tan importante dar un buen 
          servicio como cocinar un plato
          perfecto. Nos gusta ser cercanos,
          profesionales y amables.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="card-ingredientes">
      <BiDrink className="bg-transparent text-sunglow logo-text icons-home"/>
        <Card.Title>Las Bebidas</Card.Title>
        <Card.Text>
          Cervezas artesanales, de bodega y 
          de importacion, sidras y carta de 
          vinos. Si no encuentras el maridaje 
          perfecto nosotros te lo recomendamos.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='card-ingredientes'>
      <RiTeamLine className="bg-transparent text-sunglow logo-text icons-home"/>
        <Card.Title>El equipo</Card.Title>
        <Card.Text>
          Todo el equipo da personalidad
          al restaurante, siempre atentos y
          resolutivos son los que hacen
          realidad Burgercode.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='card-ingredientes'>
      <RiHomeSmileLine className="bg-transparent text-sunglow logo-text icons-home"/>
        <Card.Title>El local</Card.Title>
        <Card.Text>
          Hemos cuidado los detalles, la
          acústica, el uso de materiales
          nobles, la iluminacion, los 
          servicios para bebés y niños o la
          tecnología para ser más eficaces.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>  
     
      </div>
     );
}
 
export default CardHome;


    