import React from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const notify = () => toast.success("Mensaje enviado");
  const notifyError = () => toast.error("Error al enviar el mensaje");

  const sendMessage = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_xmaofjy",
        "template_ne1r6mo",
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

  return (
    <div>
      <ToastContainer />
      <div className="padre">
        <div className="contenido">
          <div className="mapa">
            <img
              className="mapaa"
              src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg"
              alt="mapa"
            />
          </div>
          <div className="divs">
            <div>
              <h3 className="text-dark">Pide ya una valoración gratuita</h3>
            </div>
            <div>
              <h6 className="text-dark">
                Dirección completa del inmueble (para asignarle la oficina más
                cercana)*
              </h6>
            </div>
            <form id="form" onSubmit={sendMessage} autocomplete="off">
              <div className="direction">
                <div>
                  <input
                    className="piso"
                    type="text"
                    name="direction"
                    placeholder="Dirección del piso a vender"
                  />
                </div>
              </div>
              <div className="datos-form">
                <div className="datos">
                  <input
                    className="data"
                    type="text"
                    name="name"
                    placeholder="Nombre*"
                    required
                  />
                </div>
                <div className="datos">
                  <input
                    className="data"
                    type="text"
                    name="last"
                    placeholder="Apellido*"
                    required
                  />
                </div>
              </div>
              <div className="datos-form">
                <div className="datos">
                  <input
                    className="data"
                    type="text"
                    name="email"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="datos">
                  <input
                    className="data"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    name="phone"
                    placeholder="Teléfono"
                  />
                </div>
              </div>
              <div className="box-buttom">
                <button className="send-buttom col-12 col-md-3 mt-3">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
