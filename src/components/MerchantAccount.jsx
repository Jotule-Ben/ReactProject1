import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/merchant.css";
import AccountNavbar from "./AccountNavbar";
import AccountFooter from "./AccountFooter";
import { Context } from "../context/Context";

const MerchantAccount = () => {
  // const {
  //   email,
  //   password,
  //   firstName,
  //   lastName,
  //   merchantEmail,
  //   merchantPassword,
  //   phone,
  //   phones,
  //   store,
  //   description,
  //   merchantLogin,
  //   handleCreateMerchant,
  // } = useContext(Context);

  const {
    formValues,
    formErrors,
    handleChange,
    merchantLogin,
    handleCreateMerchant,
  } = useContext(Context);

  return (
    <>
      <AccountNavbar />
      <Container>
        <h1>FOR MERCHANTS ONLY</h1>
        <div className="createAccount">
          {/* Log merchant in */}
          <div className="merchantSignInForm">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="error">{formErrors.password}</p>
              <Link to="/updatemerchantpassword">Forgot Password?</Link>
              <br />
              <div className="checkbox">
                <input type="checkbox" />
                Keep me signed in &#9432;
              </div>
              <br />
              <p>Check this box only when on a private device.</p>
              <button onClick={merchantLogin}>
                {/* <button onClick={handleSubmit}> */}
                Sign In
                {/* <Link to="/merchantdashboard">Sign In</Link> */}
              </button>
            </form>
          </div>

          {/* Create Merchant */}
          <div className="merchantLogInForm">
            <form>
              <input
                type="name"
                placeholder="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
              <p className="error">{formErrors.firstName}</p>
              <br />
              <input
                type="name"
                name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
              />
              <p className="error">{formErrors.lastName}</p>
              <br />
              <input
                type="email"
                name="merchantEmail"
                placeholder="Email Address"
                value={formValues.merchantEmail}
                onChange={handleChange}
              />
              <p className="error">{formErrors.merchantEmail}</p>
              <br />
              <input
                type="password"
                name="merchantPassword"
                placeholder="password"
                value={formValues.merchantPassword}
                onChange={handleChange}
              />
              <p className="error">{formErrors.merchantPassword}</p>
              <br />
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              <p className="error">{formErrors.phone}</p>
              <br />
              <input
                type="text"
                name="store"
                placeholder="Store Name"
                value={formValues.store}
                onChange={handleChange}
              />
              <p className="error">{formErrors.store}</p>
              <br />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formValues.description}
                onChange={handleChange}
              />
              <p className="error">{formErrors.description}</p>
              <br />
              <input
                type="number"
                name="phones"
                placeholder="Phones"
                value={formValues.phones}
                onChange={handleChange}
              />
              <p className="error">{formErrors.phones}</p>
              <br />
              <p>
                By creating an account you agree to Costco,
                <Link>terms and conditions</Link> of use.
              </p>
              <button onClick={handleCreateMerchant}>Create Account</button>
              {/* <button onClick={handleSubmit}>Create Account</button> */}
            </form>
          </div>
        </div>
      </Container>

      <AccountFooter />
    </>
  );
};

export default MerchantAccount;
