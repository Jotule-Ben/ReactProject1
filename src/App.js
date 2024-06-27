import React from "react";
// import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountNavbar from "./components/AccountNavbar";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <AccountNavbar />
    </div>
  );
}

export default App;
