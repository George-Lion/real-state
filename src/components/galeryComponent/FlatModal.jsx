import React from "react";
import { useParams } from "react-router-dom";
import products from "./../../data/product";
import "./FlatModal.css";

export const FlatModal = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Plano
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="flat-box modal-body">
              {" "}
              <img className="flat-img" src={product.flat} alt="" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Descargar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
