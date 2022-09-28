import React from 'react';
import './CardsCarta.css';
import CardCarta from './CardCarta';
import {carta} from '../../utils/burgersinfo'

const CardsCarta = () => {
    return ( 
    <div className="contenedor-cartas">
      {carta.map(element => {
        console.log(element)
        return <CardCarta 
          img={element.img} titulo = {element.titulo} descripcion = {element.descripcion}
        />
        
      })}
    </div>


     );
}
 
export default CardsCarta;