import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./../views/index";
import { Services } from "./../views/ServicesView/Services";
import { Galery } from "./../views/Galery/Galery";
import { Contact } from "./../views/Contact/Contact";
import { Sale } from "./../views/Sale/Sale";
import { NotFound } from "./../views/NotFound/NotFound";
import { Rental } from "./../views/Rental/Rental";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sale" element={<Galery />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/galery/:id" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
