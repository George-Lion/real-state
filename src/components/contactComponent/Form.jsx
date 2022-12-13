import React from "react";
import "./Form.css";

export const Form = () => {
  return (
    <div>
      <div className="form-content">
        <div className="element-content">
          <h3>Valoración gratuita</h3>
          <input
            className="direction"
            placeholder="Dirección del piso a vender"
          />
          <input className="direction" placeholder="Nombre" />
          <input className="direction" placeholder="Apellido" />
          <input className="direction" placeholder="Email" />
          <input className="direction" placeholder="Teléfono" />
        </div>
      </div>
    </div>
  );
};
