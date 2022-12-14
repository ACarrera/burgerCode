import { GiMasonJar, GiFrenchFries, GiForkKnifeSpoon } from "react-icons/gi";
import { TbBread, TbCheese } from "react-icons/tb";
import { BiDrink } from "react-icons/bi";
import { RiTeamLine, RiHomeSmileLine } from "react-icons/ri";
import "../Components/CardHome/CardHome.css";

export const nuestrosDestacados = [
  {
    icon: <GiMasonJar className="icons-home" />,
    tituloIng: "Las salsas",
    descripcionIng:
      "Las salsas que tenemos en nuestra carta son recetas originales de Burgercode, sin conservantes ni colorantes, totalmente naturales.",
  },
  {
    icon: <TbBread className="icons-home" />,
    tituloIng: "El pan",
    descripcionIng:
      "Fresco y artesano. Cada día, un panadero local nos sirve dos tipos de pan de masa madre. También hay pan sin gluten para tu burger favorita.",
  },
  {
    icon: <GiFrenchFries className="icons-home" />,
    tituloIng: "Las papas",
    descripcionIng:
      "Nuestras patatas fritas gruesas son caseras y cortadas a mano, deliciosas. Nuestra Yuca, casi tiene un club de fans!",
  },
  {
    icon: <TbCheese className="icons-home" />,
    tituloIng: "El queso",
    descripcionIng:
      "Mas de 10 quesos diferentes para nuestras hamburguesas,ensaladas y entrantes.",
  },
  {
    icon: <GiForkKnifeSpoon className="icons-home" />,
    tituloIng: "El servicio",
    descripcionIng:
      "Es tan importante dar un buen servicio como cocinar un plato perfecto. Nos gusta ser cercanos,profesionales y amables.",
  },
  {
    icon: <BiDrink className="icons-home" />,
    tituloIng: "Las bebidas",
    descripcionIng:
      "Cervezas artesanales, de bodega y de importacion, sidras y carta de vinos. Si no encuentras el maridaje perfecto nosotros te lo recomendamos.",
  },
  {
    icon: <RiTeamLine className="icons-home" />,
    tituloIng: "El equipo",
    descripcionIng:
      "Todo el equipo da personalidad al restaurante, siempre atentos y resolutivos son los que hacen realidad Burgercode.",
  },
  {
    icon: <RiHomeSmileLine className="icons-home " />,
    tituloIng: "El local",
    descripcionIng:
      "Hemos cuidado los detalles, la acústica, el uso de materiales nobles, la iluminacion, los servicios para bebés y niños o la tecnología para ser más eficaces.",
  },
];
