import React from "react";
import { HomeCarousel } from "../../components/galeryComponent/HomeCarousel";
import { useParams } from "react-router-dom";
import products from "./../../data/product";

const SingleHome = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <>
      <div>
        <HomeCarousel />
      </div>
    </>
  );
};

export default SingleHome;
