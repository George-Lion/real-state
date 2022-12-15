import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import products from "./../../data/product";

const Sale = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <Header />
      <div>
        <h1>{product.direction}</h1>
        <img src={product.image} alt="" />
        <h1>{product.price}</h1>
        <h1>{product.rooms}</h1>
      </div>
    </div>
  );
};

export default Sale;
