import React from 'react';
import './ButtonWhatsapp.css';
import imgwhatsapp from '../assets/images/whatsapp-png.png'

const ButtonWhatsapp = () => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=543815783030&text=Hola!%20Vengo%20de%20ver%20el%20*proyecto%20final*%20https://burgercode.netlify.app/%20de%20los%20alumnos%20de%20la%20*Comisi%C3%B3n%2011i*%20y%20s%C3%B3lo%20quer%C3%ADa%20contarte%20que%20qued%C3%B3%20*GENIAL*%20!" target="new">
      <img src={imgwhatsapp} className="btn-whatsapp" alt="Whatsapp" />
      </a>
    </div>
  );
};

export default ButtonWhatsapp;