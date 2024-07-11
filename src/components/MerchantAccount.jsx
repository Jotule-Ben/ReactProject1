import axios from "axios";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/merchant.css";
import AccountNavbar from "./AccountNavbar";
import AccountFooter from "./AccountFooter";

const MerchantAccount = () => {
  // Login to merchant account
  const email = useRef();
  const password = useRef();

  // Create Merchant Account
  const firstName = useRef();
  const lastName = useRef();
  const merchantEmail = useRef();
  const merchantPassword = useRef();
  const phone = useRef();
  const phones = useRef();
  const store = useRef();
  const description = useRef();

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

  const handleMerchantSubmit = (event) => {
    const firstNameValue = firstName.current.value;
    const lastNameValue = lastName.current.value;
    const merchantEmailValue = merchantEmail.current.value;
    const merchantPasswordValue = merchantPassword.current.value;
    const phoneValue = phone.current.value;
    const storeValue = store.current.value;
    const descriptionValue = description.current.value;
    const phonesValue = phones.current.value;
    console.log(
      `First Name: ${firstNameValue} \nLast Name: ${lastNameValue} \nmerchantEmail: ${merchantEmailValue} \nmerchantPassword: ${merchantPasswordValue} \nPhone: ${phoneValue}`
    );

    axios
      .post(`http://ecommerce.reworkstaging.name.ng/v2/merchants`, {
        first_name: firstNameValue,
        last_name: lastNameValue,
        email: merchantEmailValue,
        phone: phoneValue,
        store_name: storeValue,
        descp: descriptionValue,
        icon: "",
        banner: "",
        phones: phonesValue,
        password: merchantPasswordValue,
      })
      .then(
        (response) => {
          console.log(response, response.id);
          alert("Successful");
        },
        (error) => {
          console.log(error);
          alert("Error");
        }
      );
    event.preventDefault();
  };

  return (
    <>
      <AccountNavbar />
      <Container>
        <h1>FOR MERCHANTS ONLY</h1>
        <div className="createAccount">
          {/* Log merchant in */}
          <div className="merchantSignInForm">
            <form>
              <input type="email" placeholder="Email Address" ref={email} />
              <br />
              <input type="password" placeholder="password" ref={password} />
              <Link to="/updatemerchantpassword">Forgot Password?</Link>
              <br />
              <div className="checkbox">
                <input type="checkbox" />
                Keep me signed in &#9432;
              </div>
              <br />
              <p>Check this box only when on a private device.</p>
              <button onClick={handleSubmit}>
                <Link to="/merchantdashboard">Sign In</Link>
              </button>
            </form>
          </div>

          {/* Create Merchant */}
          <div className="merchantLogInForm">
            <form>
              <input type="name" placeholder="First Name" ref={firstName} />
              <br />
              <input type="name" placeholder="Last Name" ref={lastName} />
              <br />
              <input
                type="email"
                placeholder="Email Address"
                ref={merchantEmail}
              />
              <br />
              <input
                type="password"
                placeholder="password"
                ref={merchantPassword}
              />
              <br />
              <input type="phone" placeholder="Phone" ref={phone} />
              <br />
              <input type="text" placeholder="Store Name" ref={store} />
              <br />
              <input type="text" placeholder="Description" ref={description} />
              <br />
              <input type="number" placeholder="Phones" ref={phones} />
              <br />
              <p>
                By creating an account you agree to Costco,
                <Link>terms and conditions</Link> of use.
              </p>
              <button onClick={handleMerchantSubmit}>Create Account</button>
            </form>
          </div>
        </div>
      </Container>

      <AccountFooter />
    </>
  );
};

export default MerchantAccount;
