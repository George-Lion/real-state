import React from "react";
import { Link } from "react-router-dom";
import "./SaleInfo.css";
export const SaleInfo = () => {
  return (
    <div>
      <div className="album py-5">
        <div className="container mt-1">
          <h4>
            <strong>Todos nuestros servicios al alcance de un click</strong>
          </h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
            <div className="col">
              <div className="card  pic-box">
                <img
                  src="https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="pic-info"
                />
                <title>Placeholder</title>

                <p className="mt-3">
                  <strong>¿Buscas el hogar de tus sueños?</strong>
                </p>

                <div className="mt-3">
                  <p className="card-text">
                    Contamos con una gran variedad de inmuebles en las mejores
                    zonas de España.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group"></div>
                  </div>
                </div>
                <Link className="" to="/sale">
                  <button className="button-selector col-md-5">
                    Ver inmuebles
                  </button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card  pic-box">
                <img
                  src="https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="pic-info"
                />
                <title>Placeholder</title>
                <p className="mt-3">
                  <strong>Toda la información que necesitas</strong>
                </p>

                <div className="mt-3">
                  <p className="card-text">
                    Con solo enviar el formulario de datos nos encargamos de
                    todo y te lo enviamos a tu domicilio.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group"></div>
                  </div>
                </div>
                <button className="button-selector col-md-5">Servicios</button>
              </div>
            </div>
            <div className="col">
              <div className="card pic-box">
                <img
                  src="https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="pic-info"
                />
                <title>Placeholder</title>

                <p className="mt-3">
                  <strong>Las mejores vistas están aquí</strong>
                </p>

                <div className="mt-3">
                  <p className="card-text">
                    Con solo enviar el formulario de datos nos encargamos de
                    todo y te lo enviamos a tu domicilio.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group"></div>
                  </div>
                </div>
                <button className="button-selector col-md-5">Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
