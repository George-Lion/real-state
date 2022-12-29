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
          <div className=" col-10 col-sm-8 col-lg-6">
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
          <div className=" col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              ¿Quieres hacer un cambio en tu vida?
            </h1>
            <p className="lead text-white">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
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
