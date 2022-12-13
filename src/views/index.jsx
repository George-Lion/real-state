import React from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Carousel } from "../components/homeComponent/Carousel";
import { Feartures } from "../components/homeComponent/Feartures";
import Jumbotron from "../components/homeComponent/Jumbotron";

export const Landing = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Jumbotron />
      <Feartures />
      <Footer />
    </>
  );
};
