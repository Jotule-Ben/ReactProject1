import React from "react";
import AccountNavbar from "../components/AccountNavbar";
import AccountFooter from "../components/AccountFooter";
import "../css/signup.css";
import SignIn from "../components/SignIn";

const SignUp = () => {
  return (
    <>
      <AccountNavbar />
      <SignIn />
      <AccountFooter />
    </>
  );
};

export default SignUp;
