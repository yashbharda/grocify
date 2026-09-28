import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../products/Products";
import Discount from "../discount/Discount";
import Process from "../process/Process";
import TestiMonial from "../testiMonial/TestiMonial";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <TestiMonial />
    </>
  );
};

export default Home;
