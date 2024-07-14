import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/merchant.css";
import { Context } from "../context/Context";
import AccountNavbar from "./AccountNavbar";
import { Container } from "react-bootstrap";
import AccountFooter from "./AccountFooter";

const UpdateUserDetails = () => {
  const {
    formValues,
    formErrors,
    handleChange,
    handleUpdateUserDetails,
    handleUpdateUserPassword,
  } = useContext(Context);

  return (
    <>
      <AccountNavbar />
      <Container>
        <div className="createAccount">
          <div className="merchantSignInForm">
            {/* Update password */}
            <form>
              <input
                type="password"
                name="oldUserPassword"
                placeholder="old password"
                value={formValues.oldUserPassword}
                onChange={handleChange}
              />{" "}
              <br />
              <p className="error">{formErrors.oldUserPassword}</p>
              <br />
              <input
                type="password"
                name="newUserPassword"
                placeholder="new password"
                value={formValues.newUserPassword}
                onChange={handleChange}
              />
              <br />
              <p className="error">{formErrors.newUserPassword}</p>
              <br />
              <br />
              <button onClick={handleUpdateUserPassword}>
                Change Password
              </button>
            </form>
          </div>

          {/* Update Details */}
          <div className="merchantLogInForm">
            <form>
              <input
                type="name"
                name="UserfirstName"
                placeholder="First Name"
                value={formValues.UserfirstName}
                onChange={handleChange}
              />{" "}
              <br />
              <p className="error">{formErrors.UserfirstName}</p>
              <br />
              <input
                type="name"
                name="UserlastName"
                placeholder="Last Name"
                value={formValues.UserlastName}
                onChange={handleChange}
              />{" "}
              <br />
              <p className="error">{formErrors.UserlastName}</p>
              <br />
              <input
                type="email"
                name="Useremail"
                placeholder="Email Address"
                value={formValues.Useremail}
                onChange={handleChange}
              />{" "}
              <br />
              <p className="error">{formErrors.Useremail}</p>
              <br />
              <input
                type="phone"
                name="Userphone"
                placeholder="Phone"
                value={formValues.Userphone}
                onChange={handleChange}
              />
              <br />
              <p className="error">{formErrors.Userphone}</p>
              <br />
              <button onClick={handleUpdateUserDetails}>Update Details</button>
            </form>
          </div>
        </div>
      </Container>
      <AccountFooter />
    </>
  );
};

export default UpdateUserDetails;
