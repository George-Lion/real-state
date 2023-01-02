import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "./../HouseContext";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiMoneyEuroCircleFill } from "react-icons/ri";

export const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100 - 1000",
    },
    {
      value: "1000 - 2000",
    },
    {
      value: "2000 - 3000",
    },
    {
      value: "30.000 - 40.000",
    },
    {
      value: "100.000 - 130.000",
    },
    {
      value: "130.000 - 160.000",
    },
    {
      value: "160.000 - 190.000",
    },
    {
      value: "400.000 - 500.000",
    },
  ];
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
              <RiMoneyEuroCircleFill />
            </div>
            <div className="mt-1">
              <strong>{price}</strong>
              <p style={{ fontSize: "10px" }}>Elige un rango de precio</p>
            </div>
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
                  <div
                    className="pe-3 pb-1"
                    key={index}
                    onClick={() => setPrice(price.value)}
                  >
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
