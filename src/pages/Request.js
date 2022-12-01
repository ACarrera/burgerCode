import CardsRequest from '../Components/CardsRequest/CardsRequest';
// import Requests from '../Components/Requests/Requests';
import './Request.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="paginadepedidosmoviles d-flex">
    <CardsRequest menu={menu} />
    {/* <Requests /> */}
    </div>
  );
};

export default Request;