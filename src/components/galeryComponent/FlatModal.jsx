import React from "react";
import { useParams } from "react-router-dom";
import products from "./../../data/product";
import "./FlatModal.css";

export const FlatModal = ({ open, onClose }) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="onClose">
        <div
          className="d-flex justify-content-center"
          style={{ width: "80px" }}
          onClick={onClose}
        >
          <p>Cerrar</p>
        </div>
      </div>
      <div className="modal-box">
        <div className="flat-box">
          <img className="flat-img" src={product.flat} alt="" />
        </div>
      </div>
    </div>
  );
};
