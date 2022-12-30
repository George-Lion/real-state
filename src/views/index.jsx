import React from "react";
import { Carousel } from "../components/homeComponent/Carousel";
import { Feartures } from "../components/homeComponent/Feartures";
import Jumbotron from "../components/homeComponent/Jumbotron";
import { motion } from "framer-motion";
import { SaleInfo } from "../components/homeComponent/SaleInfo";

export const Landing = ({ isVisible }) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Carousel />
      <SaleInfo />
      <Jumbotron />
      {/* <Feartures /> */}
    </motion.div>
  );
};
