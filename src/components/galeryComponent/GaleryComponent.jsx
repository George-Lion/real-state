import React, { useContext } from "react";
import "./GaleryComponent.css";
import { FaBed, FaBath } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HouseContext } from "./../HouseContext";

//import House from './House'
export const GaleryComponent = () => {
  const { houses, loading } = useContext(HouseContext);

  //if loading is true
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (houses.length < 1) {
    return (
      <div className="mx-auto w-50 mt-5">
        <h3 className="text-center">No hay inmuebles en esta categoria</h3>
      </div>
    );
  }

  return (
    <div>
      <div className="galery-box mx-auto">
        {houses.map((house, index) => {
          return (
            house.type == "sale" && (
              <Link
                key={house._id}
                to={`/galery/${house._id}`}
                className="cards-definition"
              >
                <div className="image-box">
                  <img
                    className="image-view"
                    src={house.imgs[0]["value"]}
                    alt=""
                  />
                </div>
                <div className="home-details">
                  <h1>{house.direction}</h1>
                  <p>{house.description}</p>
                  <div className="home-numbers">
                    <p className="home-detail">
                      <FaBed />
                      {house.rooms}
                    </p>
                    <p className="home-detail">
                      {" "}
                      <FaBath />
                      {house.toilets}
                    </p>
                    <p className="home-detail">
                      <BsArrowsMove />
                      {house.meters}
                    </p>
                    <p className="home-detail">
                      <BsArrowsMove />
                      {house.country}
                    </p>
                  </div>
                </div>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};
