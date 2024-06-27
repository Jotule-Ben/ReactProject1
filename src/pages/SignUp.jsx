import React from "react";
import AccountNavbar from "../components/AccountNavbar";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <AccountNavbar />
      <div className="signUp">
        <h1>Sign In</h1>

        <div className="signInForm">
          <form>
            <input type="email" placeholder="Email Address" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <Link>Forgot Password?</Link>
            <br />
            <br />
            <input type="checkbox" /> <span>Keep me signed in &#9432;</span>
            <br />
            <p>Check this box only when on a private device.</p>
            <button>Sign In</button>
          </form>
          <h3>New to Costco?</h3>
          <button>Create Account</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
