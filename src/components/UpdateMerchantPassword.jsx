import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";

const UpdateMerchantPassword = () => {
  const initalValues = { oldPassword: "", newPassword: "" };
  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.oldPassword) {
      errors.oldPassword = "Old password is required";
    }

    if (!values.newPassword) {
      errors.newPassword = "New password is required";
    }
    return errors;
  };

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
            {/* {validate.oldPassword && <span>{validate.oldPassword}</span>} */}
            <br />
            <input
              type="password"
              name="newPassword"
              placeholder="new password"
              value={formValues.newPassword}
              onChange={handleChange}
            />

            <p className="error">{formErrors.newPassword}</p>
            {/* {validate.newPassword && <span>{validate.newPassword}</span>} */}
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
