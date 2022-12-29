import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "./../HouseContext";
import { TiArrowSortedDown } from "react-icons/ti";

export const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "10000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];
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
            <strong>{price}</strong>
            <p style={{ fontSize: "10px" }}>Choose price range</p>
          </div>
          <div className="mt-2" style={{ fontSize: "17px" }}>
            <TiArrowSortedDown />
          </div>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="ms-3">
            <div style={{ cursor: "pointer" }}>
              {prices.map((price, index) => {
                return (
                  <div key={index} onClick={() => setPrice(price.value)}>
                    {price.value}
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
