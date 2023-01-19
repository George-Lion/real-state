import React from "react";
import { Link } from "react-router-dom";
import "./Jumbotron.css";

export const Jumbotron = () => {
  return (
    <div>
      <div
        className="col-xxl-12 px-4 py-5"
        style={{ backgroundColor: "#428DE5" }}
      >
        <div className="container row flex-lg-row-reverse align-items-center g-3 py-5 mx-auto">
          <div className=" col-10 col-sm-12 col-lg-6 mb-4">
            <img
              src="https://images.pexels.com/photos/3995913/pexels-photo-3995913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block mx-lg-auto img-fluid"
              alt="Familia sentada en el sofá"
              width="700"
              height="500"
              loading="lazy"
              style={{ borderRadius: "90px 10px 90px 10px" }}
            />
          </div>
          <div className=" col-lg-5 me-4">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              ¿Quieres hacer un cambio de vivienda?
            </h1>
            <p className="lead text-white" style={{ textAlign: "justify" }}>
              Nuestra agencia inmobiliaria se especializa en ayudarte a
              encontrar tu hogar ideal. Con nuestra amplia selección de
              propiedades y nuestra experiencia en el mercado inmobiliario,
              podemos ayudarte a encontrar una nueva vivienda mientras vendemos
              tu hogar. ¡Contacta con nosotros y no te pierdas la oportunidad de
              encontrar el hogar de tus sueños!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link className="mt-3" to="/contact">
                <button className="button-jumbotron">¡Quiero vender!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
