import React from "react";
import "./CardsPedidos.css";

const CardsRequest = () => {
  return (
    <div className="d-flex justify-content-evenly flex-wrap col py-3">
      <div className="card col-3 rounded-0 m-1">
        <img
          src="https://picsum.photos/200/300?random=1"
          className="card-img-top border-0 rounded-0 border-0 rounded-0"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Descripción del producto.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="boton-agregarproducto-carrito btn btn-warning rounded-0 rounded-0">
              ✓
            </button>
            <p className="fs-4 m-0">$123</p>
          </div>
        </div>
      </div>
      <div className="card col-3 rounded-0 m-1">
        <img
          src="https://picsum.photos/200/300?random=2"
          className="card-img-top border-0 rounded-0 "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Descripción del producto.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-warning rounded-0 rounded-0">✓</button>
            <p className="fs-4 m-0">$123</p>
          </div>
        </div>
      </div>
      <div className="card col-3 rounded-0 m-1">
        <img
          src="https://picsum.photos/200/300?random=3"
          className="card-img-top border-0 rounded-0 "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Descripción del producto.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-warning rounded-0 rounded-0">✓</button>
            <p className="fs-4 m-0">$123</p>
          </div>
        </div>
      </div>
      <div className="card col-3 rounded-0 m-1">
        <img
          src="https://picsum.photos/200/300?random=4"
          className="card-img-top border-0 rounded-0 "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Descripción del producto.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-warning rounded-0 rounded-0">✓</button>
            <p className="fs-4 m-0">$123</p>
          </div>
        </div>
      </div>
      <div className="card col-3 rounded-0 m-1">
        <img
          src="https://picsum.photos/200/300?random=5"
          className="card-img-top border-0 rounded-0 "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Descripción del producto.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-warning rounded-0 rounded-0">✓</button>
            <p className="fs-4 m-0">$123</p>
          </div>
        </div>
      </div>
      <div className="card col-3 rounded-0 m-1">
        <img
          src="https://picsum.photos/200/300?random=6"
          className="card-img-top border-0 rounded-0 "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Descripción del producto.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-warning rounded-0 rounded-0">✓</button>
            <p className="fs-4 m-0">$123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsRequest;
