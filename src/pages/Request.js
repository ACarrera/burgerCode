import CardsRequest from '../Components/CardsRequest/CardsRequest';
import './Request.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer/Footer';

const Request = () => {

  const [menus, setMenus] = useState([]);

  const getMenus = async () => {
    try {
      const info = await axios.get("https://burguercode-db.onrender.com/getmenus");
      setMenus(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMenus();
  }, []);

  return (
    <div className="background-request">
    <div className="request-movile d-flex flex-wrap justify-content-around">
      {
      menus.map((menu, index) => (
    <CardsRequest menu={menu} index={index} />
    ))}
    </div>
    <Footer />
    </div>
  );
};

export default Request;