import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "./../HouseContext";
import { TiArrowSortedDown } from "react-icons/ti";
import { ImLocation } from "react-icons/im";
import "./CountryDropdown.css";

export const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn d-flex justify-content-between border pt-2 text-dark col-12 col-sm-12"
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
              <ImLocation />
            </div>
            <div className="mt-1">
              <strong>{country}</strong>
              <p style={{ fontSize: "10px" }}>Seleccione el lugar</p>
            </div>
          </div>
          <div className="mt-2" style={{ fontSize: "17px" }}>
            <TiArrowSortedDown />
          </div>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="ms-3">
            <div style={{ cursor: "pointer" }}>
              {countries.map((country, index) => {
                return (
                  <div key={index} onClick={() => setCountry(country)}>
                    {country}
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
