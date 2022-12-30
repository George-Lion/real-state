import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "./../HouseContext";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFillHouseDoorFill } from "react-icons/bs";

export const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn d-flex justify-content-between border pt-2 text-dark col-12 col-sm-12 "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ fontSize: "15px", backgroundColor: "white" }}
        >
          <div className="d-flex me-2">
            <div
              className="mt-2 me-2"
              style={{ fontSize: "1.2rem", color: "#428de5" }}
            >
              <BsFillHouseDoorFill />
            </div>
            <div className="mt-1">
              <strong>{property}</strong>
              <p style={{ fontSize: "10px" }}>Select your place</p>
            </div>
          </div>
          <div className="mt-2" style={{ fontSize: "17px" }}>
            <TiArrowSortedDown />
          </div>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="ms-3">
            <div style={{ cursor: "pointer" }}>
              {properties.map((property, index) => {
                return (
                  <div key={index} onClick={() => setProperty(property)}>
                    {property}
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
