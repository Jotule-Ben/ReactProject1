import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import { Context } from "../context/Context";

const UpdateMerchantPassword = () => {
  const { formValues, formErrors, handleChange, handleSubmit } =
    useContext(Context);

  return (
    <>
      <div className="signUp">
        <div className="signInForm">
          <form>
            <input
              type="password"
              name="oldPassword"
              placeholder="old password"
              value={formValues.oldPassword}
              onChange={handleChange}
            />

            <p className="error">{formErrors.oldPassword}</p>
            <br />
            <input
              type="password"
              name="newPassword"
              placeholder="new password"
              value={formValues.newPassword}
              onChange={handleChange}
            />

            <p className="error">{formErrors.newPassword}</p>
            <br />
            <button onClick={handleSubmit}>
              <Link to="">Change Password</Link>
            </button>
          </form>
          <button>
            <Link to="/updateMerchantInfo">Update Merchant Details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateMerchantPassword;
