import React, { useContext } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { HouseContext } from "./../HouseContext";
import "./GaleryComponent.css";
import { Link } from "react-router-dom";
import { SearchComponent } from "../searchComponents/SearchComponent";

export const GalleryRental = () => {
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
        <div className="album py-2">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {houses.map((house, index) => {
                return (
                  house.type == "rental" && (
                    <Link
                      key={house._id}
                      to={`/galery/${house._id}`}
                      className="cards-definition"
                    >
                      <div className="col">
                        <div className=" shadow-sm m-4">
                          <div className="card-image">
                            <img
                              className="image-view"
                              src={house.imgs[0]["value"]}
                              alt=""
                            />
                          </div>
                          <div className="card-body">
                            <p>{house.direction}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <div className="home-numbers">
                                  <p className="home-detail">
                                    <FaBed className="me-2" />
                                    {house.rooms}
                                  </p>
                                </div>
                                <div className="home-numbers">
                                  <p className="home-detail">
                                    {" "}
                                    <FaBath className="me-2" />
                                    {house.toilets}
                                  </p>
                                </div>
                                <div className="home-numbers">
                                  <p className="home-detail">
                                    <BsArrowsMove className="me-2" />
                                    {house.meters}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
