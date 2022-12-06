import CardsRequest from '../Components/CardsRequest/CardsRequest';
import './Request.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer/Footer';

const Request = () => {

  const [menu, setMenu] = useState([]);

  const getMenus = async () => {
    try {
      const info = await axios.get("https://burguercode-db.onrender.com/getmenus");
      setMenu(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMenus();
  }, []);

  return (
    <>
    <div className="request-movile d-flex">
    <CardsRequest menu={menu} />
    </div>
    <Footer />
    </>
  );
};

export default Request;