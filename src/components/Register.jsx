import React from "react";
import { Link } from "react-router-dom";
import "../css/register.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <h1>Create Account</h1>

        <div className="registerForm">
          <form>
            <input type="email" placeholder="Email Address" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <input type="password" placeholder="Confirm Password" />
            <br />
            <input type="text" placeholder="Membership Number (optional)" />
            <br />
            <Link>Where can I find my membership number?</Link>
            <br />
            <p>
              By creating an account you agree to Costco,
              <Link>terms and conditions</Link> of use.
            </p>
            <button>Create Account</button>
          </form>
          <h3>
            Already have an account? <Link to="signUp">Sign In</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Register;
