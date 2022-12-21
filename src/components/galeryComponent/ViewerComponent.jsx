import React from "react";
import "./ViewerComponent.css";
import { useParams } from "react-router-dom";
import products from "./../../data/product";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ViewerComponent = ({
  viewer,
  setViewer,
  wordData,
  setWordData,
}) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const handleClick = (index) => {
    //Eliminar console.log
    /* console.log(index); */
    const wordSlider = product.imgs[index];
    setWordData(wordSlider);
  };

  const next = (index) => {
    const wordSlider = product.imgs[index];
    setWordData(wordSlider + 1);
  };
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

        <div className="fotoss">
          <img
            className="big-image"
            src={wordData.value}
            height="300"
            width="500"
          />
        </div>
        <div>
          <button
            onClick={() => {
              next();
            }}
          >
            NEXT
          </button>
        </div>
        <div>
          <div className="wrapper-max ">
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
          </div>
        </div>
      </div>
    </div>
  );
};
