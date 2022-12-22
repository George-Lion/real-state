import React, { useState } from "react";
import "./ViewerComponent.css";
import { useParams } from "react-router-dom";
import products from "./../../data/product";
import {
  AiOutlineCloseCircle,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";

export const ViewerComponent = ({
  data,
  viewer,
  setViewer,
  wordData,
  setWordData,
}) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = product.imgs.length;

  if (Array.isArray(product) || cantidad === 0) return;
  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  /*   const handleClick = (index) => {
    
    const wordSlider = product.imgs[index];
    setWordData(wordSlider);
  }; */

  /*   const next = (index) => {
    const wordSlider = product.imgs[index];
    setWordData(wordSlider + 1);
  }; */
  return (
    <div>
      <div className="viewer-content">
        <div className="close-box">
          <button
            className="close-button mt-3"
            title="Cerrar"
            onClick={() => {
              setViewer(false);
            }}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
        <div className="all-box">
          <button
            className="buttons-arrow"
            onClick={anteriorImagen}
            title="Anterior"
          >
            <AiFillCaretLeft fontSize={"2rem"} color={"white"} />
          </button>
          <div className="fotoss">
            {product.imgs.map((data, index) => {
              return (
                <div key={index}>
                  {imagenActual === index && (
                    <img className="display-image" src={data.value} />
                  )}
                </div>
              );
            })}
          </div>
          <button
            className="buttons-arrow"
            onClick={siguienteImagen}
            title="Siguiente"
          >
            <AiFillCaretRight fontSize={"2rem"} color={"white"} />
          </button>
        </div>
        <div>
          {/*     <button
            onClick={() => {
              next();
            }}
          >
            NEXT
          </button> */}
        </div>
        <div>
          {/* <div className="wrapper-max ">
            {product.imgs.map((data, i) => (
              <div className="image-space " key={i}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
