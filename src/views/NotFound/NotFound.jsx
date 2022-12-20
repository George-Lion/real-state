import React from "react";
import page from "../../assets/notfound.svg";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="d-flex justify-content-center mb-4">
        <img className="img-error" src={page} alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <button className="btn btn-dark mt-5 ">home</button>
        </Link>
      </div>
    </motion.div>
  );
};
