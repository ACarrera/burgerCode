import { Button, Carousel } from "react-bootstrap";
import styled from "styled-components";


const MyImg = styled.img `
max-height:30vh
object-fit: cover;
object-position: center;
`


const CustomCarousel = ({images}) => {

    return ( 
    <Carousel>
      <Carousel.Item>
        <MyImg
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1582295523904-8ab53717447c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Hambu restaurante"
        />
        <Carousel.Caption>
          <h3>BurgerCode</h3>
          <p>Nunca fue tan fácil y cómodo hacer tu pedido Online, disfruta de una BurgerCode desde la comodidad de tu casa.</p>
          <Button className="bg-red">SERVICIO A DOMICILIO</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MyImg
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1583744514765-d815be1606cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="hambu con papas"
        />
        <Carousel.Caption>
          <h3>BurgerCode</h3>
          <p>Queremos que viajes con nuestra carta, que sientas de cerca la cultura de la buena comida..Experiencia única con una BurgerCode</p>
          <Button>NUESTRA CARTA</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MyImg
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1571116213508-2a5017ab1324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="hambu con aros"
        />
        <Carousel.Caption>
          <h3>BurgerCode</h3>
          <p>Burger de la Temporada: BigCode</p>
          <Button className="bg-red">Más información</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     );
}
 
export default CustomCarousel;