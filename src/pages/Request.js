import CardsRequest from '../Components/CardsRequest/CardsRequest';
import Requests from '../Components/Requests/Requests';
import './Request.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Request = () => {
  const [menu, setMenu] = useState([]);

  const getProductos = async () => {
    try {
      const info = await axios.get("http://localhost:8000/traerproductos");
      setMenu(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="paginadepedidosmoviles d-flex">
    <CardsRequest menu={menu} />
    <Requests />
    </div>
  );
};

export default Request;