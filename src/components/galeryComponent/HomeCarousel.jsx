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
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomeCarousel = () => {
  const { houses } = useContext(HouseContext);
  const { id } = useParams();
  const house = houses.find((p) => p._id === id);

  /* ALERT */
  const notify = () => toast.success("Mensaje enviado");
  const notifyError = () => toast.error("Error al enviar el mensaje");

  /* FLAT MODAL*/

  const [openModal, setOpenModal] = useState(false);

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

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_xmaofjy",
        "template_pezrll4",
        event.target,
        "aVo7deJsti1KV7Fda"
      )
      .then(() => {
        //elimina todos los valores de los inputs
        form.reset();
        //muestra la notificación de enviado
        notify();
      })

      .catch(() => {
        notifyError();
      });
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
              <div className="pb-1 mb-4 fst-italic border-bottom">
                <h3>{house.direction}</h3>
                <div>
                  <h4>{house.country}</h4>
                </div>
              </div>
              <div className="title-home">
                <div className="price-box">
                  <h4 className="text-white">
                    <strong>{house.price}€</strong>
                  </h4>
                </div>

                {house.type !== "rental" ? (
                  <>
                    <button
                      className="col-3 border rounded-pill bg-dark text-light"
                      onClick={() => setOpenModal(true)}
                    >
                      Ver plano
                    </button>
                  </>
                ) : (
                  ""
                )}
                <FlatModal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                />
              </div>

              <article className="blog-post mt-4">
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

              <div className="mortgage-section col-12 mt-5"></div>
            </div>

            {/*  second column */}

            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4 mb-3 bg-light rounded">
                  <h4 className="fst-italic">Contactanos</h4>
                  <form id="form" onSubmit={sendEmail} autocomplete="off">
                    <input
                      className="contact-home"
                      type="text"
                      placeholder="Nombre*"
                      name="name"
                      autocomplete="off"
                      required
                    />
                    <input
                      className="contact-home"
                      type="text"
                      placeholder="Apellido*"
                      name="last"
                      autocomplete="off"
                      required
                    />
                    <input
                      className="contact-home"
                      type="text"
                      placeholder="Email*"
                      name="email"
                      autocomplete="off"
                      required
                    />
                    <input
                      style={{ appearance: "none" }}
                      className="contact-home"
                      type="number"
                      min="0"
                      pattern="[0-9]*"
                      placeholder="Teléfono"
                      name="phone"
                    />
                    <textarea
                      className="contact-area"
                      rows="10"
                      cols="50"
                      placeholder="Mensaje"
                      name="message"
                    ></textarea>
                    <div>
                      <button id="button" className="btn btn-success w-100">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
                <ToastContainer />
                <div className="info-content">
                  <h6>
                    <strong>También puede contactarnos a través de:</strong>
                  </h6>
                  <p>+34 912 33 233</p>
                  <p>vendo@worldhome.com</p>
                  <p>Calle Serrano 33</p>
                </div>

                {/*  <div className="p-4">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
