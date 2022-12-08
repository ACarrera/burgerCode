import React from 'react';
import { Link } from 'react-router-dom';
import '../ButtonToRequest/ButtonToRequest.css'

const ButtonToRequest = () => {
  return (
    <Link to="/request" className="buttondecoration">
    <button className="btn btn-warning fs-3 border-0 rounded-0">Hacé tu pedido</button>
    </Link>
  );
};

export default ButtonToRequest;