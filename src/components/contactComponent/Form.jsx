import React from "react";
import "./Form.css";

export const Form = () => {
  return (
    <div>
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
            <div className="direction">
              <div>
                <input
                  className="piso"
                  type="text"
                  name=""
                  id=""
                  placeholder="Dirección del piso a vender"
                />
              </div>
            </div>
            <div className="datos-form">
              <div className="datos">
                <input
                  className="data"
                  type="text"
                  name=""
                  id=""
                  placeholder="Nombre"
                />
              </div>
              <div className="datos">
                <input
                  className="data"
                  type="text"
                  name=""
                  id=""
                  placeholder="Apellido"
                />
              </div>
            </div>
            <div className="datos-form">
              <div className="datos">
                <input
                  className="data"
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>
              <div className="datos">
                <input
                  className="data"
                  type="text"
                  name=""
                  id=""
                  placeholder="Telefono"
                />
              </div>
            </div>
            <div className="box-buttom">
              <button className="send-buttom">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
