import React from "react";
import { GaleryComponent } from "../../components/galeryComponent/GaleryComponent";
import { motion } from "framer-motion";
import { SearchComponent } from "../../components/searchComponents/SearchComponent";

export const Galery = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <SearchComponent />
      <GaleryComponent />
    </motion.div>
  );
};
