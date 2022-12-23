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
  currentImage,
  setCurrentImage,
}) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const imageLength = product.imgs.length;

  /* if (Array.isArray(product) || cantidad === 0) return; */
  const nextImage = () => {
    setCurrentImage(currentImage === imageLength - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageLength - 1 : currentImage - 1);
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
        <div
          id="carouselExampleControls"
          className="carousel slide col-12 mt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              {product.imgs.map((data, index) => {
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
