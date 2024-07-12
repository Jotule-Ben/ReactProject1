import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/merchant.css";
import AccountNavbar from "./AccountNavbar";
import AccountFooter from "./AccountFooter";
import { Context } from "../context/Context";

const MerchantAccount = () => {
  const {
    email,
    password,
    firstName,
    lastName,
    merchantEmail,
    merchantPassword,
    phone,
    phones,
    store,
    description,
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
              <button onClick={merchantLogin}>
                Sign In
                {/* <Link to="/merchantdashboard">Sign In</Link> */}
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
              <input type="phone" placeholder="Phones" ref={phones} />
              <br />
              <p>
                By creating an account you agree to Costco,
                <Link>terms and conditions</Link> of use.
              </p>
              <button onClick={handleCreateMerchant}>Create Account</button>
            </form>
          </div>
        </div>
      </Container>

      <AccountFooter />
    </>
  );
};

export default MerchantAccount;
