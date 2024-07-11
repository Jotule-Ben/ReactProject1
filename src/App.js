import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Cards from "./components/Card";
import Home from "./pages/Home";
// import AccountNavbar from "./components/AccountNavbar";
// import AccountFooter from "./components/AccountFooter";
import SignUp from "./pages/SignUp";
import RegisterNew from "./pages/RegisterNew";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import MerchantAccount from "./components/MerchantAccount";
import UpdateMerchantPassword from "./components/UpdateMerchantPassword";
import UpdateMerchantInfo from "./components/UpdateMerchantInfo";
import UpdateUserDetails from "./components/UpdateUserDetails";
import AllProduct from "./components/AllProduct";
import AllCategories from "./components/AllCategories";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" exac element={<SignUp />} />
        <Route path="/register" exac element={<RegisterNew />} />
        <Route path="/shop" exac element={<Shop />} />
        <Route path="/detail" exac element={<ProductDetail />} />
        <Route path="/merchantaccount" exac element={<MerchantAccount />} />
        <Route
          path="/updatemerchantpassword"
          exac
          element={<UpdateMerchantPassword />}
        />
        <Route
          path="/updateMerchantInfo"
          exac
          element={<UpdateMerchantInfo />}
        />
        <Route path="/updateUserDetail" exac element={<UpdateUserDetails />} />
        <Route path="/merchantdashboard" exac element={<AllProduct />} />
        <Route path="/allCategories" exac element={<AllCategories />} />
        <Route path="/allProduct" exac element={<AllProduct />} />
      </Routes>
    </>
  );
}

export default App;
