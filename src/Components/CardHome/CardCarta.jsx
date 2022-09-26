import React from 'react'
import './CardsCarta.css';
import {Card} from "react-bootstrap"

const CardCarta = ({img,titulo,descripcion}) => {
  return (
    <Card >
      <Card.Img  className="imagenes-carta" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text className='burger-cards'>
          {descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardCarta;