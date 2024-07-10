import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../css/register.css";
import axios from "axios";

const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const phone = useRef();

  const handleSubmit = (event) => {
    const firstNameValue = firstName.current.value;
    const lastNameValue = lastName.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const phoneValue = phone.current.value;
    console.log(
      `First Name: ${firstNameValue} \nLast Name: ${lastNameValue} \nEmail: ${emailValue} \nPassword: ${passwordValue} \nPhone: ${phoneValue}`
    );

    axios
      .post(`http://ecommerce.reworkstaging.name.ng/v2/users`, {
        first_name: firstNameValue,
        last_name: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        password: passwordValue,
      })
      .then(
        (response) => {
          console.log(response, response.id);
        },
        (error) => {
          console.log(error);
        }
      );
    event.preventDefault();
    // return {
    //   firstNameValue,
    //   lastNameValue,
    //   emailValue,
    //   passwordValue,
    //   phoneValue,
    // };
  };

  return (
    <>
      <div className="register">
        <h1>Create Account</h1>

        <div className="registerForm">
          <form>
            <input type="name" placeholder="First Name" ref={firstName} />
            <br />
            <input type="name" placeholder="Last Name" ref={lastName} />
            <br />
            <input type="email" placeholder="Email Address" ref={email} />
            <br />
            <input type="password" placeholder="password" ref={password} />
            <br />
            <input type="phone" placeholder="Phone" ref={phone} />
            <br />
            <p>
              By creating an account you agree to Costco,
              <Link>terms and conditions</Link> of use.
            </p>
            <button onClick={handleSubmit}>
              Create Account
              {/* <Link to="/signUp">Create Account</Link> */}
            </button>
          </form>
          <h3>
            Already have an account? <Link to="/signUp">Sign In</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Register;
