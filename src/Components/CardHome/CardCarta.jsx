import React from 'react'
import './CardsCarta.css';
import {Card} from "react-bootstrap"

const CardCarta = ({img,titulo,descripcion}) => {
  return (
    <Card className='card border-0'>
      <Card.Img  className="imagenes-carta" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text className='burger-cards'>
          {descripcion}
        </Card.Text>
        <button type="button" className="custom-button card-text">Agregar al carrito</button>
      </Card.Body>
    </Card>
  )
}

export default CardCarta;