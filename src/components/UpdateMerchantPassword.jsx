import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import axios from "axios";

const UpdateMerchantPassword = () => {
  const password = useRef();
  const newPassword = useRef();

  const handleSubmit = () => {
    const passwordValue = password.current.value;
    const newPasswordValue = newPassword.current.value;
    axios
      .post(
        `http://ecommerce.reworkstaging.name.ng/v2/merchants/:merchant_id/change-passwd`,
        {
          old_password: passwordValue,
          new_password: newPasswordValue,
        }
      )
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
        <div className="signInForm">
          <form>
            <input type="password" placeholder="old password" ref={password} />
            <br />
            <input
              type="password"
              placeholder="new password"
              ref={newPassword}
            />
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
