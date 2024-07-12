import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import AccountNavbar from "./AccountNavbar";
import AccountFooter from "./AccountFooter";

const UpdateMerchantInfo = () => {
  const {
    firstName,
    lastName,
    merchantEmail,
    phone,
    phones,
    store,
    description,
    state,
    district,
    twitter,
    FB,
    IG,
    handleUpdateMerchantDetails,
  } = useContext(Context);

  return (
    <>
      <AccountNavbar />
      <div className="signUp">
        <div className="signInForm">
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
            <input type="number" placeholder="Phone" ref={phone} />
            <br />
            <input type="text" placeholder="Store Name" ref={store} />
            <br />
            <input type="text" placeholder="Description" ref={description} />
            <br />
            <input type="text" placeholder="State" ref={state} />
            <br />
            <input type="text" placeholder="District" ref={district} />
            <br />
            <input type="text" placeholder="X(Twitter)" ref={twitter} />
            <br />
            <input type="text" placeholder="Facebook" ref={FB} />
            <br />
            <input type="text" placeholder="Instagram" ref={IG} />
            <br />
            <input type="number" placeholder="Phones" ref={phones} />
            <br />
            <button onClick={handleUpdateMerchantDetails}>
              Update Details
            </button>
          </form>
          <button>
            <Link to="/updatemerchantpassword">Update Merchant password</Link>
          </button>
        </div>
      </div>
      <AccountFooter />
    </>
  );
};

export default UpdateMerchantInfo;
