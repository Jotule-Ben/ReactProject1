import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/register.css";
import { Context } from "../context/Context";

const Register = () => {
  const { formValues, formErrors, handleChange, handleCreateUser } =
    useContext(Context);

  return (
    <>
      <div className="register">
        <h1>Create Account</h1>

        <div className="registerForm">
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
              type="password"
              name="Userpassword"
              placeholder="password"
              value={formValues.Userpassword}
              onChange={handleChange}
            />{" "}
            <br />
            <p className="error">{formErrors.Userpassword}</p>
            <br />
            <input
              type="phone"
              name="Userphone"
              placeholder="Phone"
              value={formValues.Userphone}
              onChange={handleChange}
            />{" "}
            <br />
            <p className="error">{formErrors.Userphone}</p>
            <br />
            <p>
              By creating an account you agree to Costco,
              <Link>terms and conditions</Link> of use.
            </p>
            <button onClick={handleCreateUser}>
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
