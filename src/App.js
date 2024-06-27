import React from "react";
// import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountNavbar from "./components/AccountNavbar";
import AccountFooter from "./components/AccountFooter";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <AccountNavbar />
      <AccountFooter />
    </div>
  );
}

export default App;
