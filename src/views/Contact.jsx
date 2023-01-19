import React from "react";
import { Form } from "../components/contactComponent/Form";
import "./Contact.css";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="form-background">
        <div className="d-flex justify-content-center text-light">
          <h4 className="mt-5 m-3">
            <strong>¡Ahora puedes recibir infomación más rapidamente!</strong>
          </h4>
        </div>
        <div className="d-flex justify-content-center text-light mb-2">
          <h5 className="m-3">
            Gracias a nuestro gran número de oficinas podemos ubicar la más
            cercana al domicilio
          </h5>
        </div>
        <Form />
      </div>

      <div className="album py-5 bg-light image-content">
        <div className="container">
          <div className="d-flex justify-content-center mb-4 mt-3">
            <h2 className="text-light">
              {" "}
              <strong>¿Qué podemos ofrecerte?</strong>
            </h2>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
            <div className="col">
              <div className="card shadow-sm style-box">
                <div className="card-body">
                  <p className="card-text ">
                    Contamos con gran cantidad de clientes que están en búsqueda
                    activa de inmuebles en nuestra plataforma.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm style-box">
                <div className="card-body">
                  <p className="card-text">
                    Obtenemos el mejor precio para tu casa con una valoración
                    precisa y gratuita del mercado, para venderlo al mejor
                    precio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm style-box">
                <div className="card-body">
                  <p className="card-text">
                    Llevamos tu propiedad al siguiente nivel con una amplia
                    difusión de la venta de tu inmueble, sin costo adicional
                    para ti.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm style-box">
                <div className="card-body">
                  <p className="card-text">
                    Nuestro equipo cuenta con fotógrafos profesionales que
                    crearán tanto el reportaje fotográfico como un video
                    interactivo.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm style-box">
                <div className="card-body">
                  <p className="card-text">
                    Servicio personalizado con nuestros agentes inmobiliarios
                    altamente capacitados y con experiencia en el sector.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm style-box">
                <div className="card-body">
                  <p className="card-text">
                    Para ayudarte a encontrar compradores potenciales para tu
                    casa, constantemente estamos desarrollando estrategias de
                    marketing digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?w=2000"
              className="d-block mx-lg-auto img-fluid"
              style={{ borderRadius: "10px 80px 10px 80px" }}
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="display-5 fw-bold lh-1 mb-3">
              ¡Solo necesitamos tu confianza!
            </h3>
            <p className="lead" style={{ textAlign: "justify" }}>
              Confiar en un equipo no es fácil, por eso te ofrecemos vender tú
              inmueble y no pagarás por ello hasta que se venda, nuestro
              compromiso es lograrlo y conseguir el mejor precio de venta para
              ti.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
