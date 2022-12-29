import React, { useContext } from "react";
import { CountryDropdown } from "./CountryDropdown";
import { PriceRangeDropdown } from "./PriceRangeDropdown";
import { PropertyDropdown } from "./PropertyDropdown";
import { FaSearch } from "react-icons/fa";
import "./SearchComponent.css";

import { HouseContext } from "../HouseContext";

export const SearchComponent = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <>
      <div className="">
        <div className="d-flex justify-content-center mt-5 mb-4">
          <CountryDropdown />
          <PropertyDropdown />
          <PriceRangeDropdown />
          <button className="search-bottom" onClick={() => handleClick()}>
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};
