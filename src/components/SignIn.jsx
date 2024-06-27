import React from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";

const SignUp = () => {
  return (
    <>
      <div className="signUp">
        <h1>Sign In</h1>

        <div className="signInForm">
          <form>
            <input type="email" placeholder="Email Address" />
            <br />
            <input type="password" placeholder="password" />
            <Link>Forgot Password?</Link>
            <br />
            <div className="checkbox">
              <input type="checkbox" />
              Keep me signed in &#9432;
            </div>
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
