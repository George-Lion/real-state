import React from "react";
import "./Carousel.css";
import img0 from "./../../assets/img0.jpg";
import img1 from "./../../assets/img1.jpg";
import img2 from "./../../assets/img2.jpg";
import { Link } from "react-router-dom";

export const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ maxHeight: "600px" }}>
          <div className="carousel-item active" style={{ maxHeight: "600px" }}>
            <Link className="" to="/sale">
              <img
                src={img0}
                className="img-0 d-block w-100 "
                alt="fotografía chalet"
              />
            </Link>
            <div className="carousel-caption d-none d-md-block">
              <h2>
                <strong>
                  Pisos en venta en las zonas más buscadas de España
                </strong>
              </h2>
            </div>
          </div>
          <div className="carousel-item" style={{ maxHeight: "600px" }}>
            <img src={img1} className="img-1 d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ maxHeight: "600px" }}>
            <img src={img2} className="img-2 d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                <strong>Encuentra el lugar de tus sueños</strong>
              </h5>
              <p>
                ¡Contamos con una gran variedad de inmuebles donde puede estar
                el tuyo!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
