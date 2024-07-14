import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import { Context } from "../context/Context";

const SignIn = () => {
  const { formValues, formErrors, handleChange, handleUserLogin } =
    useContext(Context);

  return (
    <>
      <div className="signUp">
        <h1>Sign In</h1>

        <div className="signInForm">
          <form>
            <input
              type="email"
              name="Useremail"
              placeholder="Email Address"
              value={formValues.Useremail}
              onChange={handleChange}
            />
            <br />
            <p className="error">{formErrors.Useremail}</p>
            <br />
            <input
              type="password"
              name="Userpassword"
              placeholder="password"
              value={formValues.Userpassword}
              onChange={handleChange}
            />
            <br />
            <p className="error">{formErrors.Userpassword}</p>
            <br />
            <Link to="/updateUserDetail">Forgot Password?</Link>
            <br />
            <div className="checkbox">
              <input type="checkbox" />
              Keep me signed in &#9432;
            </div>
            <br />
            <p>Check this box only when on a private device.</p>
            <button onClick={handleUserLogin}>Sign In</button>
          </form>
          <h3>New to Costco?</h3>
          <button>
            <Link to="/register">Create Account</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
