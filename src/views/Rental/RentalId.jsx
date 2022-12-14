import React from "react";
import { motion } from "framer-motion";
import { HomeCarousel } from "../../components/galeryComponent/HomeCarousel";

export const RentalId = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <HomeCarousel />
    </motion.div>
  );
};
