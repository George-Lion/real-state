import React from "react";
import { useState, useEffect } from "react";
import "./HomeCarousel.css";
import { useParams } from "react-router-dom";
import products from "./../../data/product";
import {
  FaBed,
  FaBath,
  FaInstagram,
  FaRulerCombined,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FlatModal } from "./FlatModal";
import { ViewerComponent } from "./ViewerComponent";

export const HomeCarousel = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  /* EJECUTA EL VISOR DE FOTOS */

  const [viewer, setViewer] = useState(false);
  const verPhoto = () => {
    setViewer(true);
  };

  const [count, setCount] = useState(1);

  const [currentImage, setCurrentImage] = useState(0);
  const imageLength = product.imgs.length;

  const handleClick = (index) => {
    const currentImage = index;
    setCurrentImage(currentImage);
    setCount(index + 1);
  };

  if (Array.isArray(product) || imageLength === 0) return;

  /* FUNCIONES PARA DETECTAR EL CLICK EN LOS BOTONES */

  const nextImage = () => {
    setCurrentImage(currentImage === imageLength - 1 ? 0 : currentImage + 1);
    setCount(count === product.imgs.length ? 1 : count + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageLength - 1 : currentImage - 1);
    setCount(count === 1 ? product.imgs.length : count - 1);
  };

  /* FUNCIONES PARA DETECTAR LA EJECUCIÓN DE TECLAS FLECHA EN LA VENTANA */

  useEffect(() => {
    const detectKeyDown = (e) => {
      if (e.keyCode === 39) {
        setCurrentImage(
          currentImage === imageLength - 1 ? 0 : currentImage + 1
        );
        setCount(count === product.imgs.length ? 1 : count + 1);
      }
    };
    document.addEventListener("keydown", detectKeyDown);
    return () => document.removeEventListener("keydown", detectKeyDown);
  });

  useEffect(() => {
    const detectKeyDown = (e) => {
      if (e.keyCode === 37) {
        setCurrentImage(
          currentImage === 0 ? imageLength - 1 : currentImage - 1
        );
        setCount(count === 1 ? product.imgs.length : count - 1);
      }
    };
    document.addEventListener("keydown", detectKeyDown);
    return () => document.removeEventListener("keydown", detectKeyDown);
  });

  return (
    <>
      {viewer == true ? (
        <ViewerComponent viewer={viewer} setViewer={setViewer} />
      ) : (
        <div className="col-sm-12 col-md-10 col-lg-10 col-xxl-8 mx-auto p-3 mt-4">
          {/* CARRUSEL DE IMAGENES */}
          {/* BOTON ANTERIOR*/}

          <div className="carrucel">
            {/*  <button
              className=" buttons-arrow"
              onClick={previousImage}
              title="Anterior"
            >
              <AiFillCaretLeft fontSize={"2rem"} color={"black"} />
            </button> */}

            {/* CONTENEDOR DE IMAGENES BOOSTRAP*/}
            <div
              id="carouselExampleControls"
              class="carousel slide col-12"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  {product.imgs.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          currentImage === index
                            ? `${"photo"} ${"active"}`
                            : "photo"
                        }
                      >
                        {currentImage === index && (
                          <img className="current-image" src={data.value} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                onClick={previousImage}
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                onClick={nextImage}
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            {/* CONTENEDOR DE IMAGENES PURO CODIGO*/}

            {/*  <div className="content-img">
              {product.imgs.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={
                      currentImage === index
                        ? `${"photo"} ${"active"}`
                        : "photo"
                    }
                  >
                    {currentImage === index && (
                      <img className="current-image" src={data.value} />
                    )}
                  </div>
                );
              })}
              <div className="count-style">
                <div className="count-numbers">
                  <p>{count}</p>
                  <p>/ {product.imgs.length}</p>
                </div>
              </div>
            </div> */}

            {/* BOTON SIGUIENTE */}

            {/*    <button
              className="buttons-arrow"
              onClick={nextImage}
              title="Siguiente"
            >
              <AiFillCaretRight fontSize={"2rem"} color={"black"} />
            </button> */}
          </div>

          {/* PANEL SELECTOR DE IMAGEN */}

          <div className="panel-image">
            <div className="wrapper-trips">
              {product.imgs.map((data, index) => (
                <div className="image-space" key={index}>
                  <img
                    className={currentImage === index ? "clicked" : "noclicked"}
                    src={data.value}
                    onClick={() => {
                      handleClick(index);
                    }}
                    height="70"
                    width="100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DETALLES DEL INMUEBLE */}

          <div className="row ">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                {product.direction}
              </h3>
              <div className="title-home">
                <div className="price-box">
                  <h4>{product.price}€</h4>
                </div>

                {product.type !== "rental" ? (
                  <>
                    <div
                      className={
                        product.available ? "btn btn-success" : "btn btn-danger"
                      }
                    >
                      {product.available ? "DISPONIBLE" : "VENDIDO"}
                    </div>
                    <button
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Plano
                    </button>
                  </>
                ) : (
                  ""
                )}
                <FlatModal id="staticBackdrop" />
              </div>

              <article className="blog-post mt-5">
                <div className="d-flex">
                  <div className="col-12 space-details">
                    <div className="icon-details" title="Habitaciones">
                      <FaBed className="me-2" />
                      <p>{product.rooms}</p>
                    </div>
                    <div className="icon-details" title="Baños">
                      <FaBath className="me-2" />
                      <p>{product.toilets}</p>
                    </div>
                    <div className="icon-details" title="metros">
                      <FaRulerCombined className="me-2" />
                      <p>{product.meters}</p>
                    </div>
                  </div>
                </div>

                <p className="description-paragraph">{product.description}</p>
                <hr />
                <h5>Caracteristicas del inmueble</h5>

                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Planta</td>
                      <td></td>
                      <td style={{ "text-align": "right" }}>{product.floor}</td>
                    </tr>
                    <tr>
                      <td>Aire acondicionado</td>
                      <td></td>
                      <td className="" style={{ "text-align": "right" }}>
                        {product.air ? "si" : "no"}
                      </td>
                    </tr>
                    <tr>
                      <td>Calefacción</td>
                      <td></td>
                      <td style={{ "text-align": "right" }}>
                        {product.heating ? "si" : "no"}
                      </td>
                    </tr>
                    <tr>
                      <td>Año de construcción</td>
                      <td></td>
                      <td style={{ "text-align": "right" }}>{product.year}</td>
                    </tr>
                  </tbody>
                </table>
              </article>

              {/* Maps */}
              <div className="col-12">
                <img
                  className="maps-img col-12"
                  src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg"
                  alt=""
                />
              </div>

              {/*  Mortgage */}

              <div className="mortgage-section col-12 mt-5">
                <h4>Calcula tu hipoteca</h4>
              </div>
            </div>

            {/*  second column */}

            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4 mb-3 bg-light rounded">
                  <h4 className="fst-italic">Contactanos</h4>
                  <form>
                    <input
                      className="contact-home"
                      type="text"
                      placeholder="Nombre*"
                    />
                    <input
                      className="contact-home"
                      type="text"
                      placeholder="Apellido*"
                    />
                    <input
                      className="contact-home"
                      type="text"
                      placeholder="Email*"
                    />
                    <input
                      className="contact-home"
                      type="text"
                      placeholder="Teléfono"
                    />
                    <textarea
                      className="contact-area"
                      rows="10"
                      cols="50"
                      placeholder="Mensaje"
                    ></textarea>
                    <div>
                      <button type="submit" className="btn btn-success w-100">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>

                <div className="info-content">
                  <h3>INFO</h3>
                </div>

                <div className="p-4">
                  <h4 className="fst-italic">Elsewhere</h4>
                  <ol className="list-unstyled">
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
