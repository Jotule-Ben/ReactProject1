import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import axios from "axios";

const UpdateUserDetails = () => {
  const password = useRef();
  const newPassword = useRef();

  const firstName = useRef();
  const lastName = useRef();
  const merchantEmail = useRef();
  const merchantPassword = useRef();
  const phone = useRef();
  const phones = useRef();
  const store = useRef();
  const description = useRef();

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

      <div className="merchantLogInForm">
        <form>
          <input type="name" placeholder="First Name" ref={firstName} />
          <br />
          <input type="name" placeholder="Last Name" ref={lastName} />
          <br />
          <input type="email" placeholder="Email Address" ref={merchantEmail} />
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
    </>
  );
};

export default UpdateUserDetails;
