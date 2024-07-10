import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import axios from "axios";

const SignIn = () => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    axios
      .post(`http://ecommerce.reworkstaging.name.ng/v2/users/login`, {
        email: emailValue,
        password: passwordValue,
      })
      .then(
        (response) => {
          console.log(response, response.id);
          alert("Login Successful!", response.id);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <div className="signUp">
        <h1>Sign In</h1>

        <div className="signInForm">
          <form>
            <input type="email" placeholder="Email Address" ref={email} />
            <br />
            <input type="password" placeholder="password" ref={password} />
            <Link>Forgot Password?</Link>
            <br />
            <div className="checkbox">
              <input type="checkbox" />
              Keep me signed in &#9432;
            </div>
            <br />
            <p>Check this box only when on a private device.</p>
            <button onClick={handleSubmit}>
              <Link to="">Sign In</Link>
              {/* <Link to="/">Sign In</Link> */}
            </button>
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
