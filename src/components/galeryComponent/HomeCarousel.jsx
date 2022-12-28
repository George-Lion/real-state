import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HouseContext } from "./../HouseContext";
import {
  FaBed,
  FaBath,
  FaInstagram,
  FaRulerCombined,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { FlatModal } from "./FlatModal";
import { ViewerComponent } from "./ViewerComponent";
import "./HomeCarousel.css";

export const HomeCarousel = () => {
  const { houses } = useContext(HouseContext);
  const { id } = useParams();
  const house = houses.find((p) => p._id === id);

  /* EJECUTA EL VISOR DE FOTOS */

  const [viewer, setViewer] = useState(false);
  const verPhoto = () => {
    setViewer(true);
  };

  const [count, setCount] = useState(1);

  const [currentImage, setCurrentImage] = useState(0);
  const imageLength = house.imgs.length;

  const handleClick = (index) => {
    const currentImage = index;
    setCurrentImage(currentImage);
    setCount(index + 1);
  };

  /*  if (Array.isArray(house) || imageLength === 0) return; */

  /* FUNCIONES PARA DETECTAR EL CLICK EN LOS BOTONES */

  const nextImage = () => {
    setCurrentImage(currentImage === imageLength - 1 ? 0 : currentImage + 1);
    setCount(count === house.imgs.length ? 1 : count + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageLength - 1 : currentImage - 1);
    setCount(count === 1 ? house.imgs.length : count - 1);
  };

  /* FUNCIONES PARA DETECTAR LA EJECUCIÓN DE TECLAS FLECHA EN LA VENTANA */

  useEffect(() => {
    const detectKeyDown = (e) => {
      if (e.keyCode === 39) {
        setCurrentImage(
          currentImage === imageLength - 1 ? 0 : currentImage + 1
        );
        setCount(count === house.imgs.length ? 1 : count + 1);
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
        setCount(count === 1 ? house.imgs.length : count - 1);
      }
    };
    document.addEventListener("keydown", detectKeyDown);
    return () => document.removeEventListener("keydown", detectKeyDown);
  });

  return (
    <>
      {viewer == true ? (
        <ViewerComponent
          viewer={viewer}
          setViewer={setViewer}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          count={count}
          setCount={setCount}
        />
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
              className="carousel slide col-12"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  {house.imgs.map((data, index) => {
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
                          <img
                            className="current-image"
                            src={data.value}
                            onClick={() => {
                              verPhoto();
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="count-style">
                <div className="count-numbers">
                  <p>
                    {count} / {house.imgs.length}
                  </p>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                onClick={previousImage}
                data-bs-target="#carouselExampleControls"
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
                onClick={nextImage}
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* CONTENEDOR DE IMAGENES PURO CODIGO*/}

            {/*  <div className="content-img">
              {house.imgs.map((data, index) => {
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
                  <p>/ {house.imgs.length}</p>
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
              {house.imgs.map((data, index) => (
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
              <div className="pb-1 mb-3 fst-italic border-bottom">
                <h3>{house.direction}</h3>
                <div>
                  <h4>{house.country}</h4>
                </div>
              </div>
              <div className="title-home">
                <div className="price-box">
                  <h4>{house.price}€</h4>
                </div>

                {house.type !== "rental" ? (
                  <>
                    <div
                      className={
                        house.available ? "btn btn-success" : "btn btn-danger"
                      }
                    >
                      {house.available ? "DISPONIBLE" : "VENDIDO"}
                    </div>
                    <button
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Ver plano
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
                      <p>{house.rooms}</p>
                    </div>
                    <div className="icon-details" title="Baños">
                      <FaBath className="me-2" />
                      <p>{house.toilets}</p>
                    </div>
                    <div className="icon-details" title="metros">
                      <FaRulerCombined className="me-2" />
                      <p>{house.meters}</p>
                    </div>
                  </div>
                </div>

                <p className="description-paragraph">{house.description}</p>
                <hr />
                <h5>Caracteristicas del inmueble</h5>

                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Planta</td>
                      <td></td>
                      <td style={{ textAlign: "right" }}>{house.floor}</td>
                    </tr>
                    <tr>
                      <td>Aire acondicionado</td>
                      <td></td>
                      <td className="" style={{ textAlign: "right" }}>
                        {house.air ? "si" : "no"}
                      </td>
                    </tr>
                    <tr>
                      <td>Calefacción</td>
                      <td></td>
                      <td style={{ textAlign: "right" }}>
                        {house.heating ? "si" : "no"}
                      </td>
                    </tr>
                    <tr>
                      <td>Año de construcción</td>
                      <td></td>
                      <td style={{ textAlign: "right" }}>{house.year}</td>
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
