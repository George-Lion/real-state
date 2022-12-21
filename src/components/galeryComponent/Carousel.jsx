import React, { useState } from "react";
import "./../galeryComponent/Carousel.css";
import products from "./../../data/product";
import { useParams } from "react-router-dom";

export const Carousel = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  // Variables y Estados
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = product?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(product) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className="w-50">
      <div className="container-drop">
        <button onClick={anteriorImagen}>←</button>
        {product.imgs.map((data, index) => {
          return (
            <div
              className={
                imagenActual === index ? `${"slide"} ${"active"}` : "slide"
              }
            >
              {imagenActual === index && (
                <img key={index} src={data.value} alt="imagen" />
              )}
            </div>
          );
        })}
        <button onClick={siguienteImagen}>→</button>
      </div>
    </div>
  );
};
