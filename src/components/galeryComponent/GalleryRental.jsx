import React from "react";
import "./GaleryComponent.css";
import products from "./../../data/product";
import { FaBed, FaBath } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SearchComponent } from "../searchComponents/SearchComponent";

export const GalleryRental = () => {
  return (
    <div>
      <SearchComponent />
      <div className="galery-box">
        {products != "" ? (
          products.map((product) =>
            product.type == "rental" ? (
              <Link
                key={product._id}
                to={`/galery/${product._id}`}
                className="cards-definition"
              >
                <div className="image-box">
                  <img
                    className="image-view"
                    src={product.imgs[0]["value"]}
                    alt=""
                  />
                </div>
                <div className="home-details">
                  <h1>{product.direction}</h1>
                  <p>{product.description}</p>
                  <div className="home-numbers">
                    <p className="home-detail">
                      <FaBed />
                      {product.rooms}
                    </p>
                    <p className="home-detail">
                      {" "}
                      <FaBath />
                      {product.toilets}
                    </p>
                    <p className="home-detail">
                      <BsArrowsMove />
                      {product.meters}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              ""
            )
          )
        ) : (
          <div className="mx-auto w-50 mt-5">
            <h3 className="text-center">No hay inmuebles en esta categoria</h3>
          </div>
        )}

        <div className="box-buttons">
          <div className="before-button">
            <button>atras</button>
          </div>
          <div className="next-button">
            <button>adelante</button>
          </div>
        </div>
      </div>
    </div>
  );
};
