import React from "react";
import "./ViewerComponent.css";
import { useParams } from "react-router-dom";
import products from "./../../data/product";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ViewerComponent = ({
  data,
  viewer,
  setViewer,
  currentImage,
  setCurrentImage,
  count,
  setCount,
}) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  const imageLength = product.imgs.length;

  /* if (Array.isArray(product) || cantidad === 0) return; */
  const nextImage = () => {
    setCurrentImage(currentImage === imageLength - 1 ? 0 : currentImage + 1);
    setCount(count === product.imgs.length ? 1 : count + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageLength - 1 : currentImage - 1);
    setCount(count === 1 ? product.imgs.length : count - 1);
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
        <div
          id="carouselExampleControls"
          className="carousel slide col-12 mt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
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
                        className="full-image"
                        src={data.value}
                        onClick={() => {
                          verPhoto();
                        }}
                      />
                    )}
                  </div>
                );
              })}
              <div className="full-count mb-2">
                <div className="full-numbers">
                  <p>
                    {count} / {product.imgs.length}
                  </p>
                </div>
              </div>
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

        <div></div>
        <div></div>
      </div>
    </div>
  );
};
