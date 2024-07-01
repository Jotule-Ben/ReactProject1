import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Cards from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cardssec">
        <Cards />
      </div>
      <Footer />
    </>
  );
};

export default Home;
