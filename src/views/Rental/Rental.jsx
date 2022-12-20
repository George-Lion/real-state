import React from "react";
import { motion } from "framer-motion";
import { GalleryRental } from "../../components/galeryComponent/GalleryRental";

export const Rental = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <GalleryRental />
    </motion.div>
  );
};
