import React from "react";
import { useState } from "react";
import "./HomeCarousel.css";
import { useParams } from "react-router-dom";
import products from "./../../data/product";
import { FaBed, FaBath } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";

export const HomeCarousel = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const [wordData, setWordData] = useState(product.imgs[0]);
  const handleClick = (index) => {
    //Eliminar console.log
    console.log(index);
    const wordSlider = product.imgs[index];
    setWordData(wordSlider);
  };
  return (
    <>
      <div className="view-content mt-4">
        <div className="content-img">
          <img
            className="big-image"
            src={wordData.value}
            height="300"
            width="500"
          />
        </div>
        <div className="panel-image">
          {product.imgs.map((data, i) => (
            <div className="thumbnail" key={i}>
              <img
                className={wordData.id == i ? "clicked" : "noclicked"}
                src={data.value}
                onClick={() => handleClick(i)}
                height="70"
                width="100"
              />
            </div>
          ))}
        </div>

        {/* features */}

        <div class="row g-5">
          <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
              {product.direction}
            </h3>
            <div className="title-home">
              <div className="price-box">
                <p>{product.price}€</p>
              </div>
              <div
                className={
                  product.available ? "btn btn-success" : "btn btn-danger"
                }
              >
                {product.available ? "DISPONIBLE" : "VENDIDO"}
              </div>
            </div>

            <article class="blog-post mt-5">
              <div className="d-flex">
                <div className="space-details">
                  <div className="icon-details">
                    <FaBed />
                    <p>{product.rooms}</p>
                  </div>
                  <div className="icon-details">
                    <FaBath />
                    <p>{product.toilets}</p>
                  </div>
                  <div className="icon-details">
                    <FaRulerCombined />
                    <p>{product.meters}</p>
                  </div>
                </div>
              </div>

              <p>{product.description}</p>
              <hr />
              <h5>Caracteristicas del inmueble</h5>

              <table class="table">
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
          </div>

          {/*  second column */}

          <div class="col-md-4">
            <div class="position-sticky" style={{ top: "2rem" }}>
              <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">Contactanos</h4>
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
                <div>
                  <button className="btn btn-success w-100">Enviar</button>
                </div>
              </div>

              <div class="p-4">
                <h4 class="fst-italic">Archives</h4>
                <ol class="list-unstyled mb-0">
                  <li>
                    <a href="#">March 2021</a>
                  </li>
                  <li>
                    <a href="#">February 2021</a>
                  </li>
                  <li>
                    <a href="#">January 2021</a>
                  </li>
                  <li>
                    <a href="#">December 2020</a>
                  </li>
                  <li>
                    <a href="#">November 2020</a>
                  </li>
                  <li>
                    <a href="#">October 2020</a>
                  </li>
                  <li>
                    <a href="#">September 2020</a>
                  </li>
                  <li>
                    <a href="#">August 2020</a>
                  </li>
                  <li>
                    <a href="#">July 2020</a>
                  </li>
                  <li>
                    <a href="#">June 2020</a>
                  </li>
                  <li>
                    <a href="#">May 2020</a>
                  </li>
                  <li>
                    <a href="#">April 2020</a>
                  </li>
                </ol>
              </div>

              <div class="p-4">
                <h4 class="fst-italic">Elsewhere</h4>
                <ol class="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
