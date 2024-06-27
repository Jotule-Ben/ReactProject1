import React from "react";
import costcologo from "../asset/costcoLogo.png";
import "../css/accountnav.css";

const AccountNavbar = () => {
  return (
    <>
      <div className="nav">
        <img src={costcologo} alt="" />
      </div>
    </>
  );
};

export default AccountNavbar;
