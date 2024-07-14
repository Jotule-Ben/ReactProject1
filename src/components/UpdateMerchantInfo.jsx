import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import AccountNavbar from "./AccountNavbar";
import AccountFooter from "./AccountFooter";

const UpdateMerchantInfo = () => {
  const { formValues, formErrors, handleChange, handleUpdateMerchantDetails } =
    useContext(Context);

  return (
    <>
      <AccountNavbar />
      <div className="signUp">
        <div className="signInForm">
          <form>
            <input
              type="name"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formValues.firstName}
            />{" "}
            <br />
            <p className="error">{formErrors.firstName}</p>
            <br />
            <input
              type="name"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formValues.lastName}
            />{" "}
            <br />
            <p className="error">{formErrors.lastName}</p>
            <br />
            <input
              type="email"
              name="merchantEmail"
              placeholder="Email Address"
              onChange={handleChange}
              value={formValues.merchantEmail}
            />{" "}
            <br />
            <p className="error">{formErrors.merchantEmail}</p>
            <br />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={formValues.phone}
            />{" "}
            <br />
            <p className="error">{formErrors.phone}</p>
            <br />
            <input
              type="text"
              name="store"
              placeholder="Store Name"
              onChange={handleChange}
              value={formValues.store}
            />{" "}
            <br />
            <p className="error">{formErrors.store}</p>
            <br />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={formValues.description}
            />{" "}
            <br />
            <p className="error">{formErrors.description}</p>
            <br />
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              value={formValues.state}
            />{" "}
            <br />
            <p className="error">{formErrors.state}</p>
            <br />
            <input
              type="text"
              name="district"
              placeholder="District"
              onChange={handleChange}
              value={formValues.district}
            />{" "}
            <br />
            <p className="error">{formErrors.district}</p>
            <br />
            <input
              type="text"
              name="twitter"
              placeholder="X(Twitter)"
              onChange={handleChange}
              value={formValues.twitter}
            />{" "}
            <br />
            <p className="error">{formErrors.twitter}</p>
            <br />
            <input
              type="text"
              name="FB"
              placeholder="Facebook"
              onChange={handleChange}
              value={formValues.FB}
            />{" "}
            <br />
            <p className="error">{formErrors.FB}</p>
            <br />
            <input
              type="text"
              name="IG"
              placeholder="Instagram"
              onChange={handleChange}
              value={formValues.IG}
            />{" "}
            <br />
            <p className="error">{formErrors.IG}</p>
            <br />
            <input
              type="number"
              name="phones"
              placeholder="Phones"
              onChange={handleChange}
              value={formValues.phones}
            />{" "}
            <br />
            <p className="error">{formErrors.phones}</p>
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
