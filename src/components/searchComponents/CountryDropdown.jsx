import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "./../HouseContext";
import { TiArrowSortedDown } from "react-icons/ti";

export const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn d-flex border pt-2 text-white"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ fontSize: "12px", backgroundColor: "#428DE5" }}
        >
          <div className="me-2">
            <strong>{country}</strong>
            <p style={{ fontSize: "10px" }}>Select your place</p>
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
