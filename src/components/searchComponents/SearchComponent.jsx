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
        <div className="search-box">
          <CountryDropdown />
          <PropertyDropdown />
          <PriceRangeDropdown />
          <button
            className="search-bottom col-12 col-sm-12"
            onClick={() => handleClick()}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};
