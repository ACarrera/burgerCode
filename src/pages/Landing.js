import "./Landing.css";
import { FaHamburger } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import React from "react";

const Landing = () => {
  localStorage.clear();

  return (
    <>
      <div className="app-landing h-100 w-100 p-5" id="landing">
        <div className="app-wrapper-info p-0">
          <h3 className="h3-landing card-text d-flex align-items-center">
            la mejor <FaHamburger className="h3-icon" />
          </h3>
          <h1 className="app-landing-h1 card-text h1-landing">burger</h1>
          <h4 className="card-text h4-landing">INGREDIENTES ESPECIALES</h4>
          <p className="card-text p-landing">
            Carne de calidad, verduras frescas y pan casero recién salidos del
            horno.
          </p>
          <Link
            to="/login"
            className="loginbutton d-flex justify-content-center mb-4"
          >
            <button className="btn btn-warning border-0 rounded-0 px-5 fs-4">
              INGRESÁ
            </button>
          </Link>
        </div>
        <div className="bordes-img">
          <div className="app-wrapper-img">
            <img
              src="https://media.istockphoto.com/photos/tasty-grilled-home-made-burger-picture-id945053910?k=20&m=945053910&s=612x612&w=0&h=h4VALU-pvfvXEl7YVKUpxj49XG_l73JR3xwxMyVBTG4="
              alt="BurguerCode Presentación"
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
