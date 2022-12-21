import React from "react";
import { useState } from "react";
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

  const [wordData, setWordData] = useState(product.imgs[0]);
  const handleClick = (index) => {
    //Eliminar console.log
    /* console.log(index); */
    const wordSlider = product.imgs[index];
    setWordData(wordSlider);
  };
  return (
    <>
      {viewer == true ? (
        <ViewerComponent
          viewer={viewer}
          setViewer={setViewer}
          wordData={wordData}
          setWordData={setWordData}
        />
      ) : (
        <div className="col-sm-12 col-md-10 col-lg-10 col-xxl-8 mx-auto p-3 mt-4">
          <div className="content-img">
            <img
              className="big-image"
              src={wordData.value}
              height="300"
              width="500"
              onClick={() => {
                verPhoto();
              }}
            />
          </div>

          <div className="panel-image">
            <div className="wrapper-trips">
              {product.imgs.map((data, i) => (
                <div className="image-space" key={i}>
                  <img
                    className={wordData.id == i ? "clicked" : "noclicked"}
                    src={data.value}
                    onClick={() => {
                      handleClick(i);
                    }}
                    height="70"
                    width="100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* features */}

          <div className="row ">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                {product.direction}
              </h3>
              <div className="title-home">
                <div className="price-box">
                  <p>{product.price}€</p>
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
                      <FaBed />
                      <p>{product.rooms}</p>
                    </div>
                    <div className="icon-details" title="Baños">
                      <FaBath />
                      <p>{product.toilets}</p>
                    </div>
                    <div className="icon-details" title="metros">
                      <FaRulerCombined />
                      <p>{product.meters}</p>
                    </div>
                  </div>
                </div>

                <p>{product.description}</p>
                <hr />
                <h5>Caracteristicas del inmueble</h5>

                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>Planta</td>
                      <td></td>
                      <td>{product.floor}</td>
                    </tr>
                    <tr>
                      <td>Aire acondicionado</td>
                      <td></td>
                      <td>{product.air ? "si" : "no"}</td>
                    </tr>
                    <tr>
                      <td>Calefacción</td>
                      <td></td>
                      <td>{product.heating ? "si" : "no"}</td>
                    </tr>
                    <tr>
                      <td>Año de construcción</td>
                      <td></td>
                      <td>{product.year}</td>
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
