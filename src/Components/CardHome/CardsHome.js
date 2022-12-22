import React from "react";
import "./CardHome.css";
import CardHome from "./CardHome";
import { nuestrosDestacados } from "../../utils/burgersinfo";

const CardsHome = () => {
  return (
    <div className="contenedor-cartasHome">
      {nuestrosDestacados.map((element) => {
        console.log(element);
        return (
          <CardHome
            icon={element.icon}
            tituloIng={element.tituloIng}
            descripcionIng={element.descripcionIng}
          />
        );
      })}
    </div>
  );
};

export default CardsHome;
