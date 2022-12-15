import React from "react";
import "./GaleryComponent.css";
import products from "./../../data/product";
import { FaBed, FaBath } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

export const GaleryComponent = () => {
  return (
    <div>
      <div className="galery-box">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/galery/${product._id}`}
            className="cards-definition"
          >
            <div className="image-box">
              <img className="image-view" src={product.image} alt="" />
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
        ))}
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
