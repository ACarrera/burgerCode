import React from 'react';
import CardsPedidos from '../Components/CardsPedidos/CardsPedidos';
import CarritoPedidos from '../Components/CarritoPedidos/CarritoPedidos';
import './PedidosPage.css';

const PedidosPage = () => {
  return (
    <div className="d-flex d-sm-block">
    <CardsPedidos />
    <CarritoPedidos />
    </div>
  );
};

export default PedidosPage;