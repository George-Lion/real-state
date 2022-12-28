import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "./../HouseContext";
import { TiArrowSortedDown } from "react-icons/ti";

export const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn-light d-flex border pt-2"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ fontSize: "12px" }}
        >
          <div className="me-2">
            <strong>{property}</strong>
            <p style={{ fontSize: "10px" }}>Select your place</p>
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
